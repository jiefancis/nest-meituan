import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    private redisService;
    constructor(prisma: PrismaService, jwtService: JwtService, redisService: RedisService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(email: string, password: string, name?: string): Promise<{
        id: number;
        phone_number: string | null;
        phone_v: number | null;
        openid: string | null;
        openid_my: string | null;
        inviter_uid: number | null;
        invite_status: number | null;
        nick_name: string | null;
        email: string | null;
        gender: boolean | null;
        language: string | null;
        city: string | null;
        province: string | null;
        country: string | null;
        avatar_url: string | null;
        birthday: Date | null;
        level: boolean | null;
        score: number | null;
        status: number | null;
        remark: string | null;
        c_date: number | null;
        created_at_unix: number | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    findUserByPhone(phone_number: string): Promise<{
        code: number;
        data: {
            password: string | null;
            id: number;
            phone_number: string | null;
            phone_v: number | null;
            openid: string | null;
            openid_my: string | null;
            inviter_uid: number | null;
            invite_status: number | null;
            nick_name: string | null;
            email: string | null;
            gender: boolean | null;
            language: string | null;
            city: string | null;
            province: string | null;
            country: string | null;
            avatar_url: string | null;
            birthday: Date | null;
            level: boolean | null;
            score: number | null;
            status: number | null;
            remark: string | null;
            c_date: number | null;
            created_at_unix: number | null;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
        error?: undefined;
    } | {
        code: number;
        error: any;
        data?: undefined;
    }>;
}
