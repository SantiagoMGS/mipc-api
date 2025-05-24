import { Module } from '@nestjs/common';
import { UserDatasource } from './prisma/user/user.prisma.datasource'; // Ajusta la ruta
import { UserRepositoryImpl } from './prisma/user/user.repository-impl';
import { UserRepository } from '@domain/user/user.repository';

@Module({
  imports: [],
  providers: [
    UserDatasource,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [UserRepository],
})
export class PersistenceModule {}
