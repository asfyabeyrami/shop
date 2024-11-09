import { Identifier, Transaction } from 'sequelize';
import * as Models from '../models/index';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/DTO/category.dto';

@Injectable()
export class CategoryDataAccess {
  tableName() {
    return Models.Product.tableName;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Models.Category> {
    const category = await Models.Category.create({ CreateCategoryDto });
    return category;
  }

  async findAll(): Promise<Models.Category[]> {
    return await Models.Category.findAll({
      include: [Models.Product],
    });
  }

  async findOne(id: number): Promise<Models.Category> {
    return await Models.Category.findByPk(id, {
      include: [Models.Product],
    });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<[number, Models.Category[]]> {
    return await Models.Category.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<number> {
    return await Models.Category.destroy({ where: { id } });
  }
}
