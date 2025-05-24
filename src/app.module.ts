import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from '@infrastructure/persistence/prisma/prisma.module';
import { UserModule } from '@presentation/user/user.module';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';

@Module({
  imports: [PrismaModule, PersistenceModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
