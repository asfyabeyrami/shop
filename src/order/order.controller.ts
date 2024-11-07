import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from '../DTO/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post(':userId')
  create(
    @Param('userId') userId: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.create(+userId, createOrderDto);
  }

  @Get('user/:userId')
  findUserOrders(@Param('userId') userId: string) {
    return this.ordersService.findUserOrders(+userId);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
}
