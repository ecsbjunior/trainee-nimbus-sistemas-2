import { Module } from '@nestjs/common';
import { OrdersService } from './order.service';
import { UsersModule } from '../users/users.module';
import { OrdersController } from './orders.controller';

@Module({
  imports: [UsersModule],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [],
})
export class OrdersModule {}
