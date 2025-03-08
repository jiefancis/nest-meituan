import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrderService } from './order.service';
import { OrderStatusQueryDto } from './dto/status-query.dto';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly configService: ConfigService,
    private readonly orderservice: OrderService,
  ) {}

  @Post('preCreateByShop')
  async orderPreCreateByShop(@Body() data) {
    try {
      return await this.orderService.orderPreCreateByShop(data);
    } catch (error) {
      // 处理错误
      console.error('preCreateByShop-controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }
  @Post('create')
  async orderCreate(@Body() data) {
    try {
      return await this.orderService.orderCreate(data);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Get('status/query')
  async orderQuery(@Query() query: OrderStatusQueryDto) {
    try {
      return await this.orderService.orderQueryStatus(query);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Get('rider/location')
  async orderRiderLocation(@Query() query: OrderStatusQueryDto) {
    try {
      return await this.orderService.orderRiderLocation(query);
    } catch (error) {
      // 处理错误
      console.error('order/rider/location--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('cancel')
  async orderDelete(@Body() data) {
    try {
      return await this.orderService.orderCancel(data);
    } catch (error) {
      // 处理错误
      console.error('controller--error', error);
      return {
        code: 500,
        message: error,
      };
    }
  }

  @Post('mealCode/saveMealCodeByPkgId')
  async saveMealCodeByPkgId(@Body() data) {
    return this.orderService.saveMealCodeByPkgId(data);
  }

  @Post('status/callback')
  @HttpCode(200)
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
  @HttpCode(200)
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
  @HttpCode(200)
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

  @Post('deliveryCode/callback')
  @HttpCode(200)
  async orderDeliveryCodeCallback(@Body() formData: Record<string, any>) {
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
