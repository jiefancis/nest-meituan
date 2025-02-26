import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
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
    login(req: any): Promise<{
        access_token: string;
    }>;
    hello(req: any): Promise<number>;
    findUserByPhone(req: Request): Promise<{
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
