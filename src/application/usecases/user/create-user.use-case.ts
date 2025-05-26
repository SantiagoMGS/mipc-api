import { UserRepository } from '@domain/user/user.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { EmailAlreadyExistsError } from '@domain/exceptions/email-already-exists.error';
import { CreateUserCommand } from './command/create-user.command';
import { GetRoleByIdUseCase } from '../role/get-role-by-id.use-case';
import { UserEntity } from '@domain/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserResponseDto } from './dto/user-response.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly getRoleByIdUseCase: GetRoleByIdUseCase,
  ) {}

  async execute(command: CreateUserCommand): Promise<UserResponseDto> {
    try {
      const role = await this.getRoleByIdUseCase.execute({
        id: command.roleId,
      });
      const userId = uuidv4();
      const passwordHash = await bcrypt.hash(command.password, 10);
      const newUserEntity: UserEntity = new UserEntity({
        id: userId,
        email: command.email,
        fullName: command.fullName,
        passwordHash: passwordHash,
        roleId: command.roleId,
        roleName: role.name,
      });
      const createdUser = await this.userRepository.create(newUserEntity);
      return {
        id: createdUser.id,
        email: createdUser.email,
        fullName: createdUser.fullName,
        roleId: createdUser.roleId,
        roleName: createdUser.roleName,
      };
    } catch (error) {
      if (error instanceof EmailAlreadyExistsError) {
        throw new ConflictException(error.message);
      }
      throw error;
    }
  }
}
