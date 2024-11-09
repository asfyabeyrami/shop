import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from 'src/models';
import { CategoryDataAccess } from 'src/dataAccess/category.dataAccess';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService,CategoryDataAccess],
  exports: [CategoryService],
})
export class CategoryModule {}
