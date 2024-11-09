import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from '../models/product.model';
import { ProductDataAccess } from 'src/dataAccess/product.dataAccess';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService,ProductDataAccess],
  exports: [ProductService],
})
export class ProductsModule {}
