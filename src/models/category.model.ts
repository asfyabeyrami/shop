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
  import { Product } from './product.model';

  @Table({
    tableName: 'category',
    paranoid: true,
    deletedAt: 'deletedAt',
  })
  export class Category extends Model {
    @Column({
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    })
    id: number;

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

    @HasMany(() => Product, { foreignKey: 'categoryId' })
    Product: Product[];
  }
