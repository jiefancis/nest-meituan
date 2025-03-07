import { Injectable, Inject, LoggerService } from '@nestjs/common';
import {
  createShop,
  queryShop,
  updateShop,
  shopAreaQuery,
  shopBalanceQuery,
} from '@meituanApi/shop';
import { ConfigService } from '@nestjs/config';
import { BaseCallbackService } from '@common/baseCallback';
import { Logger } from 'winston';

@Injectable()
export class ShopService extends BaseCallbackService {
  private readonly appKey: string;
  private readonly appSecret: string;

  constructor(protected readonly configService: ConfigService) {
    super(configService);
    this.appKey = this.configService.get<string>('MEITUAN_APP_KEY');
    this.appSecret = this.configService.get<string>('MEITUAN_APP_SECRET');
  }
  async shopCreate(data) {
    return await createShop(data);
  }

  async shopQuery(shopId: string) {
    return await queryShop(shopId);
  }

  async shopUpdate(data: Record<string, any>) {
    return await updateShop(data);
  }
  async shopAreaQuery(data: Record<string, any>) {
    return await shopAreaQuery(data);
  }
  async shopBalanceQuery(shopId) {
    return await shopBalanceQuery(shopId);
  }
}
