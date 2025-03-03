import { Injectable, Inject } from '@nestjs/common';
import { createOrder, queryOrderStatus } from '@meituanApi/order';
import { ConfigService } from '@nestjs/config';
// import { InjectLogger } from '@nestjs/common/services';
import { BaseCallbackService } from '@common/baseCallback';
import { Logger } from 'winston';

@Injectable()
export class OrderService extends BaseCallbackService {
  private readonly appKey: string;
  private readonly appSecret: string;

  constructor(protected readonly configService: ConfigService) {
    super(configService);
    this.appKey = this.configService.get<string>('MEITUAN_APP_KEY');
    this.appSecret = this.configService.get<string>('MEITUAN_APP_SECRET');
  }
  async orderCreate() {
    return await createOrder('', {
      appSecret: this.appSecret,
      appKey: this.appKey,
    });
  }

  async orderQueryStatus(shopId: string) {
    return await queryOrderStatus(shopId, {
      appSecret: this.appSecret,
      appKey: this.appKey,
    });
  }
}
