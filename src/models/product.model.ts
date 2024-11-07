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
import { User } from '../models/user.model';

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

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: Sequelize.BIGINT,
    references: { model: 'user', key: 'id' },
  })
  userId: number;

  @Column({
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @BelongsTo(() => User, { foreignKey: 'userId' })
  user: User;
}
