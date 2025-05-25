import { UserRepository } from '@domain/user/user.repository';
import { Injectable } from '@nestjs/common';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => ({
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      roleId: user.roleId,
      roleName: user.roleName,
    }));
  }
}
