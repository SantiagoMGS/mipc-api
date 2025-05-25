import {
  CreateUserUseCase,
  GetAllUsersUseCase,
} from '@application/usecases/user/';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from '@application/usecases/user/command/create-user.comand';

@Controller('user')
export class UserController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}
  @Get()
  getUsers() {
    const users = this.getAllUsersUseCase.execute();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const command: CreateUserCommand = {
      ...createUserDto,
    };
    return this.createUserUseCase.execute(command);
  }
}
