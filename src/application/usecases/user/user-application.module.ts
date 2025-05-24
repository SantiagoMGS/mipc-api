import { Module } from '@nestjs/common';
import { GetAllUsersUseCase } from './get-all-users.use-case';

@Module({
  imports: [],
  controllers: [],
  providers: [GetAllUsersUseCase],
  exports: [GetAllUsersUseCase],
})
export class UserApplicationModule {}
