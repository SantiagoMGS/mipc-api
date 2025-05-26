import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from '@infrastructure/persistence/prisma/prisma.module';
import { UserModule } from '@presentation/user/user.module';
import { PersistenceModule } from '@infrastructure/persistence/persistence.module';
import { AuthModule } from '@presentation/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    PersistenceModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
