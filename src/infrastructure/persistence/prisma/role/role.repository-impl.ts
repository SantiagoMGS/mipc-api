import { Injectable } from '@nestjs/common';
import { RoleEntity } from '@domain/role/role.entity';
import { RoleRepository } from '@domain/role/role.repository';
import { RoleDatasource } from './role.prisma.datasource';

@Injectable()
export class RoleRepositoryImpl implements RoleRepository {
  constructor(private readonly roleDatasource: RoleDatasource) {
    this.roleDatasource = roleDatasource;
  }

  async findById(id: string): Promise<RoleEntity | null> {
    const role = await this.roleDatasource.findById(id);
    return role;
  }
}
