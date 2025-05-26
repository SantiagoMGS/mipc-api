import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginApplicationModule } from '@application/usecases/auth/login-application.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    LoginApplicationModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
