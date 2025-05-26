import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dtp/login.dto';
// import { LoginCommand } from '@application/usecases/auth/command/login.command';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    // const command: LoginCommand = {
    // ...loginDto,
    // };
    return loginDto; //'this.loginUseCase.execute(command)';
  }
}
