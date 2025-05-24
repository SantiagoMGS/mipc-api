import { UserEntity } from '@domain/user/user.entity';
import { UserRepository } from '@domain/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
