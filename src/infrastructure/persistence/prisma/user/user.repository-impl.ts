import { UserEntity } from '@domain/user/user.entity';
import { UserRepository } from '@domain/user/user.repository';
import { UserDatasource } from './user.prisma.datasource';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {
    this.userDatasource = userDatasource;
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userDatasource.getAll();
    return users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role.name,
      };
    });
  }

  async create(user: any): Promise<any> {
    const newUser = await this.userDatasource.create(user);
    return newUser;
  }
}
