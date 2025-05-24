import { GetAllUsersUseCase } from '@application/usecases/user/get-all-users.use-case';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}
  @Get()
  getUsers() {
    const users = this.getAllUsersUseCase.execute();
    return users;
  }
}
