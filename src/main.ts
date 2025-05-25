import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '@infrastructure/config/swagger.config';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  // Enable CORS allow all origins
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Enable validation pipe to validate the body of the request
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'API Docs - Mi Aplicación',
  });

  await app.listen(process.env.PORT ?? 3000);

  logger.log(
    `🔍 Swagger is available on http://localhost:${process.env.PORT ?? 3000}/api/docs`,
  );

  logger.log(
    `🚀 Server is running on port http://localhost:${process.env.PORT ?? 3000}`,
  );
}
void bootstrap();
