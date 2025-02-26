import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import { AllExceptionsFilter } from './filters/exception.filter';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = WinstonModule.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('GMX-NEZHA-API-SERVICE', {
            prettyPrint: true,
            colors: true,
          }),
        ),
      }),
      new DailyRotateFile({
        filename: './logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '5m',
        maxFiles: '14d',
        level: 'info',
      }),
      new DailyRotateFile({
        filename: './logs/application-error-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '5m',
        maxFiles: '14d',
        level: 'error',
      }),
    ],
    exceptionHandlers: [
      new DailyRotateFile({
        filename: './logs/exceptions-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '5m',
        maxFiles: '14d',
      }),
    ],
  });
  const app = await NestFactory.create(AppModule, { logger });
  // 启用 CORS 并使用默认配置
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(logger));
  const configService = app.get(ConfigService);
  const port = configService.get('PORT', 3000);

  await app.listen(port);
}
bootstrap();
