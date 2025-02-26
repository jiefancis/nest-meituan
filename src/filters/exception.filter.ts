import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  LoggerService,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    this.logger.error(
      `Exception occurred: ${exception instanceof Error ? exception.message : JSON.stringify(exception)}`,
      {
        path: request.url,
        method: request.method,
        exception:
          exception instanceof Error
            ? exception.stack
            : JSON.stringify(exception),
      },
    );

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      response.status(500).json({
        statusCode: 500,
        message: 'Internal Server Error',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
