import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
  Param,
  Req,
} from '@nestjs/common';
// import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('hello')
  async hello(@Request() req) {
    // console.log(req.user);
    return 666;
  }

  @Get('findUserByPhone')
  async findUserByPhone(@Req() req: Request) {
    // console.log(666, req.query.phone);
    // @ts-ignore
    return this.authService.findUserByPhone(req.query.phone);
  }
}
