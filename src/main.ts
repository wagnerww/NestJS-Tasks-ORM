import { NestFactory } from '@nestjs/core';
import { Logger, Options } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const options = new DocumentBuilder()
    .setTitle('Auth Example')
    .setDescription('jWT Authentication demo')
    .setVersion('1.0')
    .addTag('Users')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  logger.log(`applicatication listening on port ${port}`);
}
bootstrap();
