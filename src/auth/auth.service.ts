import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { compare, genSalt, hash } from 'bcryptjs';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
    private readonly jwtService: JwtService,
  ) {}
  async craeteUser(dto: AuthDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: await hash(dto.password, salt),
    });

    return newUser.save();
  }
  async findUser(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    const isCorrectPassword = await compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }
    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      accesToken: await this.jwtService.signAsync(payload),
    };
  }
}
