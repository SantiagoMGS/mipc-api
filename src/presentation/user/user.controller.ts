import {
  CreateUserUseCase,
  GetAllUsersUseCase,
} from '@application/usecases/user/';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserCommand } from '@application/usecases/user/command/create-user.command';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @Get()
  getUsers() {
    const users = this.getAllUsersUseCase.execute();
    return users;
  }

  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({
    status: 409,
    description: 'El email ya está en uso',
  })
  @ApiResponse({
    status: 404,
    description: 'El rol no existe',
  })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const command: CreateUserCommand = {
      ...createUserDto,
    };
    return this.createUserUseCase.execute(command);
  }
}
