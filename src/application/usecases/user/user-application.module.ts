import { Module } from '@nestjs/common';
import { GetAllUsersUseCase } from './get-all-users.use-case';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';
import { CreateUserUseCase } from './create-user.use-case';

@Module({
  imports: [PersistenceModule],
  controllers: [],
  providers: [GetAllUsersUseCase, CreateUserUseCase],
  exports: [GetAllUsersUseCase, CreateUserUseCase],
})
export class UserApplicationModule {}
