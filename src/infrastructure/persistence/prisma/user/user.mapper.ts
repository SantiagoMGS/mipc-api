import { UserEntity } from '@domain/user/user.entity';
import { UserGetPayload } from '../types/user.types';

export class UserMapper {
  static toDomain(prismaUser: UserGetPayload): UserEntity {
    return {
      id: prismaUser.id,
      email: prismaUser.email,
      fullName: prismaUser.fullName,
      passwordHash: prismaUser.password,
      roleId: prismaUser.role.id,
      roleName: prismaUser.role.name,
    };
  }

  static toDomainList(prismaUsers: UserGetPayload[]): UserEntity[] {
    return prismaUsers.map((user) => UserMapper.toDomain(user));
  }
}
