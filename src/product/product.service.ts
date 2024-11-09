import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../DTO/product.dto';
import { ProductDataAccess } from 'src/dataAccess/product.dataAccess';
import { Transaction } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(
    private readonly productDataAccess: ProductDataAccess,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productDataAccess.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productDataAccess.findAll();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productDataAccess.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async findByCategory(categoryId: number): Promise<Product[]> {
    return this.productDataAccess.findByCategory(categoryId);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const [count, [updatedProduct]] = await this.productDataAccess.update(id, updateProductDto);
    if (count === 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return updatedProduct;
  }

  async updateStock(id: number, quantity: number, transaction?: Transaction): Promise<Product> {
    const [count, [updatedProduct]] = await this.productDataAccess.updateStock(id, quantity, transaction);
    if (count === 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return updatedProduct;
  }

  async remove(id: number): Promise<void> {
    const count = await this.productDataAccess.remove(id);
    if (count === 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
  }
}
