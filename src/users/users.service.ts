import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDataAccess } from '../dataAccess/user.dataAccess';
import { CreateUserDto, UpdateUserDto } from 'src/DTO/user.dto';
import { User } from '../models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userDataAccess: UserDataAccess) {}

  //   findUserByEmail = async(email:string) =>{
  //     return await this.userDataAccess.findOne({email})
  //   }
  createUser = async (createUserDto: CreateUserDto) => {
    const user = await this.userDataAccess.create(createUserDto);
    // this.userDataAccess.save(user)
    return user;
  };

  async findAll(): Promise<User[]> {
    return this.userDataAccess.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userDataAccess.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userDataAccess.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const [count, [updatedUser]] = await this.userDataAccess.update(
      id,
      updateUserDto,
    );
    if (count === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return updatedUser;
  }

  async remove(id: number): Promise<void> {
    const count = await this.userDataAccess.remove(id);
    if (count === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
  }
}
