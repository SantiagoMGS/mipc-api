import { UserRepository } from '@domain/user/user.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { EmailAlreadyExistsError } from '@domain/exceptions/email-already-exists.error';
import { CreateUserCommand } from './command/create-user.comand';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: CreateUserCommand) {
    try {
      return await this.userRepository.create(user);
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }
}
