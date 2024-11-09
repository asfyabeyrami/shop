import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';
// relasions
import { Category } from './category.model';

@Table({
  tableName: 'products',
  paranoid: true,
  deletedAt: 'deletedAt',
})
export class Product extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  })
  id: number;

  @ForeignKey(() => Category)
  @Column({
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'category', key: 'id' },
  })
  categoryId: number;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: Sequelize.INTEGER,
    allowNull: true,
  })
  price: number;

  @Column({
    type: Sequelize.INTEGER,
    allowNull: true,
  })
  stock: number;

  @BelongsTo(() => Category, { foreignKey: 'categoryId' })
  Category: Category;
}
