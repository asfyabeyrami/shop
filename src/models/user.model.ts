import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import Sequelize from 'sequelize';
// relasions
// import { Cart } from './cart.model';

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
    type: Sequelize.INTEGER,
  })
  id: number;

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
  userName: string;

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
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

//   @HasMany(() => Cart, { foreignKey: 'userId' })
//   Cart: Cart[];
}
