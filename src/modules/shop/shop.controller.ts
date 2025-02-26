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
      const res = await this.shopService.shopCreate();
      if (res.status === 200) {
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
      const res = await this.shopService.shopQuery('');
      if (res.status === 200) {
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
      const clientSign = formData.sign;
      delete formData.sign;

      const appSecret = this.configService.get<string>('MEITUAN_APP_SECRET');

      const sign = generateSign(formData, appSecret);
      console.log('formData::', formData, sign === clientSign);

      let resData =
        sign === clientSign
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
