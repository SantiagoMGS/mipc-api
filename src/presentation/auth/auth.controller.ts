import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { LoginDto } from './dtp/login.dto';
import { LoginCommand } from '@application/usecases/auth/command/login.command';
import { LoginUseCase } from '@application/usecases/auth/login.use-case';
import { AuthGuard } from '@infrastructure/auth/guards/jwt-auth.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  login(@Body() loginDto: LoginDto) {
    const command: LoginCommand = {
      ...loginDto,
    };
    return this.loginUseCase.execute(command);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return req.user;
  }
}
