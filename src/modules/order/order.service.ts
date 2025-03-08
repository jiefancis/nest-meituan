import { Injectable, Inject } from '@nestjs/common';
import {
  createOrder,
  queryOrderStatus,
  orderPreCreateByShop,
  queryOrderRiderLocation,
  orderDelete,
  saveMealCodeByPkgId,
} from '@meituanApi/order';
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
  async orderPreCreateByShop(data) {
    return await orderPreCreateByShop(data);
  }
  async orderCreate(data) {
    return await createOrder(data);
  }

  async orderQueryStatus(data: { delivery_id: number; mt_peisong_id: string }) {
    return await queryOrderStatus(data);
  }

  async orderRiderLocation(data) {
    return await queryOrderRiderLocation(data);
  }

  async orderCancel(data) {
    return await orderDelete(data);
  }

  async saveMealCodeByPkgId(data) {
    return await saveMealCodeByPkgId(data);
  }
}
