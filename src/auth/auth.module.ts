import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { UserService } from 'src/users/users.service';
import { UserDataAccess } from 'src/dataAccess/user.dataAccess';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserService,UserDataAccess],
})
export class AuthModule {}
