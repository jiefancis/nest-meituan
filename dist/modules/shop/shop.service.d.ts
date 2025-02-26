import { ConfigService } from '@nestjs/config';
export declare class ShopService {
    private readonly configService;
    private readonly appKey;
    private readonly appSecret;
    constructor(configService: ConfigService);
    shopCreate(): Promise<import("axios").AxiosResponse<any, any>>;
    shopQuery(shopId: string): Promise<import("axios").AxiosResponse<any, any>>;
}
