import { Injectable, OnModuleDestroy, LoggerService } from '@nestjs/common';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly redis: Redis;
  // private readonly logger: Logger = new Logger();

  constructor(
    private configService: ConfigService,
    // private readonly logger: LoggerService,
  ) {
    this.redis = new Redis(this.configService.get('REDIS_URL'));
    // this.redis.on('error', (err) => {
    //   this.logger.error('Redis error::', err);
    // });
  }

  async onModuleDestroy() {
    await this.redis.quit();
  }

  getClient(): Redis {
    return this.redis;
  }
}
