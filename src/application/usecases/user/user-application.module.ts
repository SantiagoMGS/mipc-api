import { Module } from '@nestjs/common';
import { GetAllUsersUseCase } from './get-all-users.use-case';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [],
  providers: [GetAllUsersUseCase],
  exports: [GetAllUsersUseCase],
})
export class UserApplicationModule {}
