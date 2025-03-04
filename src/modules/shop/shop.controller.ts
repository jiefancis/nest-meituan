import { Body, Controller, Get, Post, Req, Request, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopService } from './shop.service';
import { generateSign } from '@utils/sign';

@Controller('shop')
export class ShopController {
  constructor(
    private readonly shopService: ShopService,
    private readonly configService: ConfigService,
  ) {}
  @Get('create')
  async shopCreate() {
    try {
      const res: any = await this.shopService.shopCreate();
      if (res.code === 0) {
        return res.data;
      }
      return res?.data;
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
  async shopQuery(@Req() req: Request) {
    try {
      const res: any = await this.shopService.shopQuery('');
      if (res.code === 0) {
        return res.data;
      }
      return res?.data;
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
