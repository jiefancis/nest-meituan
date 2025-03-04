import { Body, Controller, Get, Post, Req, Request, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrderService } from './order.service';
import { generateSign } from '@utils/sign';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly configService: ConfigService,
    private readonly orderservice: OrderService,
  ) {}
  @Get('create')
  async orderCreate() {
    try {
      const res: any = await this.orderService.orderCreate();
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

  @Get('queryStatus')
  async orderQuery(@Req() req: Request) {
    try {
      const res: any = await this.orderService.orderQueryStatus('');
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
  async orderStatusCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.orderservice.checkSignature(formData)
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

  @Post('exception/callback')
  async orderExceptionCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.orderservice.checkSignature(formData)
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

  @Post('mealloss/callback')
  async orderMeallossCallback(@Body() formData: Record<string, any>) {
    try {
      let resData = this.orderservice.checkSignature(formData)
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
