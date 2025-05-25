import { Module } from '@nestjs/common';
import { GetAllUsersUseCase } from './get-all-users.use-case';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';
import { CreateUserUseCase } from './create-user.use-case';
import { GetRoleByIdUseCase } from '../role/get-role-by-id.use-case';

@Module({
  imports: [PersistenceModule],
  controllers: [],
  providers: [GetAllUsersUseCase, CreateUserUseCase, GetRoleByIdUseCase],
  exports: [GetAllUsersUseCase, CreateUserUseCase, GetRoleByIdUseCase],
})
export class UserApplicationModule {}
