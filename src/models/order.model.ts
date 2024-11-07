import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import Sequelize from 'sequelize';
// relasions
import { User } from '../models/user.model';
import { Product } from '../models/product.model';

@Table({
  tableName: 'orders',
  paranoid: true,
  deletedAt: 'deletedAt',
})
export class Order extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.BIGINT.UNSIGNED,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'user', key: 'id' },
  })
  userId: string;

  @ForeignKey(() => Product)
  @Column({
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'product', key: 'id' },
  })
  productId: string;

  @Column({
    type: Sequelize.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: Sequelize.INTEGER,
    allowNull: false,
  })
  totalPrice: number;

  @Column({
    type: DataType.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
  })
  status: string;

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

  @BelongsTo(() => User, { foreignKey: 'userId' })
  user: User;

  @BelongsTo(() => Product, { foreignKey: 'productId' })
  product: Product;
}
