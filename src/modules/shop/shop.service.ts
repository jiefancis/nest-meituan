import { Injectable } from '@nestjs/common';
import { createShop, queryShop } from '@meituanApi/shop';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ShopService {
  private readonly appKey: string;
  private readonly appSecret: string;

  constructor(private readonly configService: ConfigService) {
    this.appKey = this.configService.get<string>('MEITUAN_APP_KEY');
    this.appSecret = this.configService.get<string>('MEITUAN_APP_SECRET');
  }
  async shopCreate() {
    return await createShop('', {
      appSecret: this.appSecret,
      appKey: this.appKey,
    });
  }

  async shopQuery(shopId: string) {
    return await queryShop(shopId, {
      appSecret: this.appSecret,
      appKey: this.appKey,
    });
  }
}
