import { Module } from '@nestjs/common';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';
import { LoginUseCase } from './login.use-case';

@Module({
  imports: [PersistenceModule],
  controllers: [],
  providers: [LoginUseCase],
  exports: [LoginUseCase],
})
export class LoginApplicationModule {}
