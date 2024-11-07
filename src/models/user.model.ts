import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';
// relasions
import { Product } from '../models/product.model';

@Table({
  tableName: 'users',
  paranoid: true,
  deletedAt: 'deletedAt',
})
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.BIGINT.UNSIGNED,
  })
  id: number;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    allowNull: false,
    type: Sequelize.STRING,
  })
  password: string;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  })
  mobile: string;

  @Column({
    allowNull: false,
    type: Sequelize.STRING,
  })
  name: string;

  @Column({
    allowNull: false,
    type: Sequelize.STRING,
  })
  lastName: string;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: Sequelize.TEXT,
    allowNull: true,
  })
  jwtToken: string;


  @Column({
    defaultValue: new Date(),
    allowNull: false,
    type: Sequelize.DATE,
  })
  createdAt: Date;

  @Column({
    defaultValue: new Date(),
    allowNull: false,
    type: Sequelize.DATE,
  })
  updatedAt: Date;

  @Column({
    allowNull: true,
    type: Sequelize.DATE,
  })
  deletedAt: Date;

  @HasMany(() => Product, { foreignKey: 'userId' })
  product: Product[];
}
