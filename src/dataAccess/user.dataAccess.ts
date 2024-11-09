import * as Models from '../models/index';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/DTO/user.dto';

@Injectable()
export class UserDataAccess {
  tableName() {
    return Models.User.tableName;
  }

  async create(createUserDto: CreateUserDto): Promise<Models.User> {
    const user = await Models.User.create({ CreateUserDto });
    return user;
  }

  async findAll(): Promise<Models.User[]> {
    return await Models.User.findAll();
  }

  async findOne(id: number): Promise<Models.User> {
    return await Models.User.findByPk();
  }

  async findByEmail(email: string): Promise<Models.User> {
    return await Models.User.findOne({
      where: { email: email },
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<[number, Models.User[]]> {
    return await Models.User.update(updateUserDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<number> {
    return await Models.User.destroy({ where: { id } });
  }
}
