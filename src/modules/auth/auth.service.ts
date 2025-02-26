import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private redisService: RedisService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // @ts-ignore
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    // Store token in Redis
    await this.redisService.getClient().set(
      `token:${user.id}`,
      token,
      'EX',
      86400, // 24 hours
    );

    return {
      access_token: token,
    };
  }

  async register(email: string, password: string, name?: string) {
    const existingUser = await this.prisma.gmt_user.findUnique({
      // @ts-ignore
      where: { email },
    });

    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.gmt_user.create({
      // @ts-ignore
      data: {
        email,
        password: hashedPassword,
        nick_name: name,
      },
    });

    const { password: _, ...result } = user;
    return result;
  }

  async findUserByPhone(phone_number: string) {
    try {
      const user = await this.prisma.gmt_user.findFirst({
        where: { phone_number },
      });
      return {
        code: 200,
        data: user,
      };
    } catch (error) {
      console.log('error::', error);
      return {
        code: 500,
        error,
      };
    }
  }
}
