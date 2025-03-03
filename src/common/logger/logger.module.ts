import { Global, Module } from '@nestjs/common';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';

@Global()
@Module({
  providers: [
    {
      provide: 'GLOBAL_LOGGER',
      useFactory: () => {
        return WinstonModule.createLogger({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple(),
          ),
          transports: [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                nestWinstonModuleUtilities.format.nestLike(
                  'GMX-NEZHA-API-SERVICE',
                  {
                    prettyPrint: true,
                    colors: true,
                  },
                ),
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
      },
    },
  ],
  exports: ['GLOBAL_LOGGER'],
})
export class LoggerModule {}
