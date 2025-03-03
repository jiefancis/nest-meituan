import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { RedisModule } from './modules/redis/redis.module';
import { ShopModule } from '@modules/shop/shop.module';
import { OrderModule } from '@modules/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}}`, '.env', '.env.local'],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    PrismaModule,
    RedisModule,
    AuthModule,
    ShopModule,
    OrderModule,
    // BaseCallbackModule,
  ],
})
export class AppModule {}
