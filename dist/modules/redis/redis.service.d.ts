import { OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';
export declare class RedisService implements OnModuleDestroy {
    private configService;
    private readonly redis;
    constructor(configService: ConfigService);
    onModuleDestroy(): Promise<void>;
    getClient(): Redis;
}
