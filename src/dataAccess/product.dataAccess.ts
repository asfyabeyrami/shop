import { Identifier, Transaction } from 'sequelize';
import * as Models from '../models/index';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/DTO/product.dto';

@Injectable()
export class ProductDataAccess {
  tableName() {
    return Models.Product.tableName;
  }

  async create(createProductDto: CreateProductDto): Promise<Models.Product> {
    const product = await Models.Product.create({ CreateProductDto });
    return product;
  }

  async findAll(): Promise<Models.Product[]> {
    return await Models.Product.findAll({
      include: [Models.Category],
    });
  }

  async findOne(id: number): Promise<Models.Product> {
    return await Models.Product.findByPk(id, {
      include: [Models.Category],
    });
  }

  async findByCategory(categoryId: number): Promise<Models.Product[]> {
    return await Models.Product.findAll({
      where: { categoryId },
      include: [Models.Category],
    });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    transaction?: Transaction,
  ): Promise<[number, Models.Product[]]> {
    return await Models.Product.update(updateProductDto, {
      where: { id },
      returning: true,
      transaction,
    });
  }

  async updateStock(
    id: number,
    quantity: number,
    transaction?: Transaction,
  ): Promise<[number, Models.Product[]]> {
    return await Models.Product.update(
      { stock: quantity },
      {
        where: { id },
        returning: true,
        transaction,
      },
    );
  }

  async remove(id: number): Promise<number> {
    return await Models.Product.destroy({ where: { id } });
  }
}
