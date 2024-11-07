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
import { Order } from './order.model';

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
    type: Sequelize.BIGINT.UNSIGNED,
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

  @Column({
    type: Sequelize.INTEGER,
    allowNull: true,
  })
  price: number;

  @HasMany(() => Order, { foreignKey: 'userId' })
  order: Order[];
}
