import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as Models from '../models/index';
import { CategoryDataAccess } from 'src/dataAccess/category.dataAccess';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/DTO/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryDataAccess: CategoryDataAccess,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Models.Category> {
    return this.categoryDataAccess.create(createCategoryDto);
  }

  async findAll(): Promise<Models.Category[]> {
    return this.categoryDataAccess.findAll();
  }

  async findOne(id: number): Promise<Models.Category> {
    const category = await this.categoryDataAccess.findOne(id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Models.Category> {
    const [count, [updatedCategory]] = await this.categoryDataAccess.update(id, updateCategoryDto);
    if (count === 0) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return updatedCategory;
  }

  async remove(id: number): Promise<void> {
    const count = await this.categoryDataAccess.remove(id);
    if (count === 0) {
      throw new NotFoundException(`Category #${id} not found`);
    }
  }
}

