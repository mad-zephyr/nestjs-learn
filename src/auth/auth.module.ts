import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { UserModelSchema } from './user.model';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserModelSchema,
        collection: 'User',
      },
    ]),
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJWTConfig,
    }),
  ],
  providers: [AuthService, JWTStrategy],
})
export class AuthModule {}
