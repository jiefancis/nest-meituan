import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Request,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopService } from './shop.service';
import { generateSign } from '@utils/sign';

@Controller('shop')
export class ShopController {
  constructor(
    private readonly shopService: ShopService,
    private readonly configService: ConfigService,
  ) {}
  @Post('create')
  async shopCreate(@Body() data: Record<string, any>) {
    try {
      return await this.shopService.shopCreate(data);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('update')
  async shopUpdate(@Body() data: Record<string, any>) {
    try {
      return await this.shopService.shopUpdate(data);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Get('query')
  async shopQuery(@Query('shopId') shop_id: string) {
    try {
      return await this.shopService.shopQuery(shop_id);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Get('area/query')
  async shopAreaQuery(
    @Query('shopId') shop_id: string,
    @Query('deliveryServiceCode') delivery_service_code: number,
  ) {
    try {
      return await this.shopService.shopAreaQuery({
        shop_id,
        delivery_service_code,
      });
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Get('balance/query')
  async shopBalanceQuery(@Query('shopId') shop_id: string) {
    try {
      return await this.shopService.shopBalanceQuery(shop_id);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('status/callback')
  async shopStatusCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.shopService.checkSignature(formData)
        ? { code: 0, message: '接口请求成功' }
        : { code: 500, message: '接口请求失败' };

      return resData;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('deliveryRange/callback')
  async shopDeliveryCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.shopService.checkSignature(formData)
        ? { code: 0, message: '接口请求成功' }
        : { code: 500, message: '接口请求失败' };

      return resData;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('deliveryRisk/callback')
  async shopDeliveryRiskCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.shopService.checkSignature(formData)
        ? { code: 0, message: '接口请求成功' }
        : { code: 500, message: '接口请求失败' };

      return resData;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('deliverymanClock/callback')
  async shopDeliveryManClockCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.shopService.checkSignature(formData)
        ? { code: 0, message: '接口请求成功' }
        : { code: 500, message: '接口请求失败' };

      return resData;
    } catch (error) {
      return {
        code: 500,
        message: error,
      };
    }
  }
}
