import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dtp/login.dto';
import { LoginCommand } from '@application/usecases/auth/command/login.command';
import { LoginUseCase } from '@application/usecases/auth/login.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    const command: LoginCommand = {
      ...loginDto,
    };
    return this.loginUseCase.execute(command);
  }
}
