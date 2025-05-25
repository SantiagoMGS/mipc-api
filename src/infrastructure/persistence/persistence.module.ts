import { Module } from '@nestjs/common';
import { UserDatasource } from './prisma/user/user.prisma.datasource'; // Ajusta la ruta
import { UserRepositoryImpl } from './prisma/user/user.repository-impl';
import { UserRepository } from '@domain/user/user.repository';
import { RoleRepository } from '@domain/role/role.repository';
import { RoleDatasource } from './prisma/role/role.prisma.datasource';
import { RoleRepositoryImpl } from './prisma/role/role.repository-impl';

@Module({
  imports: [],
  providers: [
    UserDatasource,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
    RoleDatasource,
    {
      provide: RoleRepository,
      useClass: RoleRepositoryImpl,
    },
  ],
  exports: [UserRepository, RoleRepository],
})
export class PersistenceModule {}
