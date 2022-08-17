/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,   // Só irá passar as validações que tiver no arquivo dto
    forbidNonWhitelisted: true,  // Se tiver um atributo sendo enviado além do que está no arquivo dto não será aceito
    transform: true  // irá tipar os objetos com os tipos que estão no arquivo dto
  }),
  );

  await app.listen(3000);
}
bootstrap();
