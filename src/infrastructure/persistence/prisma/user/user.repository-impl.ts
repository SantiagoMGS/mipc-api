import { UserEntity } from '@domain/user/user.entity';
import { UserRepository } from '@domain/user/user.repository';
import { UserDatasource } from './user.prisma.datasource';
import { Injectable } from '@nestjs/common';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {
    this.userDatasource = userDatasource;
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userDatasource.getAll();
    return UserMapper.toDomainList(users);
  }

  async create(userEntity: UserEntity): Promise<UserEntity> {
    const newUser = await this.userDatasource.create(userEntity);
    return UserMapper.toDomain(newUser);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.userDatasource.findByEmail(email);
    if (!user) {
      return null;
    }
    return UserMapper.toDomain(user);
  }
}
