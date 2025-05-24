import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule);

  logger.log(
    `🚀 Server is running on port http://localhost:${process.env.PORT ?? 3000}`,
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
