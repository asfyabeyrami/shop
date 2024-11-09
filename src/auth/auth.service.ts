import { HttpException, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/DTO/auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models';
import { UserService } from 'src/users/users.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private readonly userService: UserService,
  ) {}
  async register(registerDto: RegisterDto) {
    const user = await this.userService.findByEmail(registerDto.email);
    if (user) {
      throw new HttpException('user already exists', 400);
    }
    registerDto.password = await bcrypt.hash(registerDto.password, 10);
    return await this.userService.createUser(registerDto);
  }
  login(loginDto: LoginDto) {
    return '';
  }
}
