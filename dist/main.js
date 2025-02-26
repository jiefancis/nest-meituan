"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const exception_filter_1 = require("./filters/exception.filter");
const DailyRotateFile = require("winston-daily-rotate-file");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const logger = nest_winston_1.WinstonModule.createLogger({
        format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), nest_winston_1.utilities.format.nestLike('GMX-NEZHA-API-SERVICE', {
                    prettyPrint: true,
                    colors: true,
                })),
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
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exception_filter_1.AllExceptionsFilter(logger));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT', 3000);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map