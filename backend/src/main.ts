import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS to allow requests from a specific origin with credentials
  app.enableCors({
    origin: 'http://127.0.0.1:5174',
    credentials: true,
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  });

  // Parse cookies from incoming requests
  app.use(cookieParser());

  // Add a global validation pipe to the application
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce((accumulator, error) => {
          accumulator[error.property] = Object.values(error.constraints).join(
            ', ',
          );
          return accumulator;
        }, {});

        console.log('formattedErrors123', formattedErrors);

        // Throw a `BadRequestException` with the formatted errors
        throw new BadRequestException(formattedErrors);
      },
    }),
  );

  // Start the application server on port 3001
  await app.listen(3001);
}
bootstrap();
