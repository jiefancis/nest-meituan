import { ConfigService } from '@nestjs/config';
import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly shopService;
    private readonly configService;
    constructor(shopService: ShopService, configService: ConfigService);
    shopCreate(): Promise<any>;
    shopQuery(req: Request): Promise<any>;
    shopStatusCallback(formData: Record<string, any>): Promise<{
        code: number;
        message: any;
    }>;
}
