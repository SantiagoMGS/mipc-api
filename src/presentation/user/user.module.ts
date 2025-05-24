import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserApplicationModule } from '@application/usecases/user/user-application.module';

@Module({
  imports: [UserApplicationModule],
  controllers: [UserController],
})
export class UserModule {}
