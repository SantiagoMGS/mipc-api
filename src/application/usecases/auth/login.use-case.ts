import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginCommand } from './command/login.command';
import { UserRepository } from '@domain/user/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: LoginCommand): Promise<any> {
    const user = await this.userRepository.findByEmail(command.email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const isPasswordValid = await bcrypt.compare(
      command.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // TODO: Implementar estrategia JWT
    return {
      accessToken: 'token',
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
}
