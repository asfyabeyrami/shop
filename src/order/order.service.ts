import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from '../models/order.model';
import { CreateOrderDto } from '../DTO/order.dto';
import { ProductsService } from '../product/product.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
    private productsService: ProductsService,
    private usersService: UsersService,
  ) {}

  async create(userId: number, createOrderDto: CreateOrderDto): Promise<Order> {
    const product = await this.productsService.findOne(createOrderDto.productId);


    const totalPrice = product.price * createOrderDto.quantity;

    return this.orderModel.create({
      userId,
      productId: product.id,
      quantity: createOrderDto.quantity,
      totalPrice,
      status: createOrderDto.status || 'pending',
    });
  }

  async findUserOrders(userId: number): Promise<Order[]> {
    return this.orderModel.findAll({
      where: { userId },
      include: ['product'],
    });
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll({
      include: ['user', 'product'],
    });
  }
}
