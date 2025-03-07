import { Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateSign } from '@utils/sign';

export class BaseCallbackService {
  constructor(
    protected readonly configService: ConfigService,
    // protected readonly logger: LoggerService,
  ) {}

  checkSignature(formData: Record<string, any>) {
    try {
      const clientSign = formData.sign;
      delete formData.sign;

      const appSecret = this.configService.get<string>('MEITUAN_APP_SECRET');

      const sign = generateSign(formData, appSecret);
      // console.log('formData::', formData, sign === clientSign);

      return sign === clientSign;
    } catch (error) {
      // this.logger.error(error);

      return false;
    }
  }
}
