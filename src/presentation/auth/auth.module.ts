import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginApplicationModule } from '@application/usecases/auth/login-application.module';

@Module({
  imports: [LoginApplicationModule],
  controllers: [AuthController],
})
export class AuthModule {}
