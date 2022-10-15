import {
  Controller,
  Post,
  HttpCode,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ALREADY_USER_EMAIL_ERROR } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const user = await this.authService.findUser(dto.login);

    if (user) {
      throw new BadRequestException(ALREADY_USER_EMAIL_ERROR);
      // throw new HttpException(
      //   ALREADY_USER_EMAIL_ERROR,
      //   HttpStatus.I_AM_A_TEAPOT,
      // );
    }
    return this.authService.craeteUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, password }: AuthDto) {
    const { email } = await this.authService.validateUser(login, password);
    return this.authService.login(email);
  }
}
