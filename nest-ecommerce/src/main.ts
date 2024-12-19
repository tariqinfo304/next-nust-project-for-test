import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',  // Allow all origins (or specify your frontend's URL)
    methods: 'GET,POST,PUT,DELETE,OPTIONS',  // Allow these HTTP methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',  // Allow headers
    credentials: true,  // Allow credentials (cookies, etc.)
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


