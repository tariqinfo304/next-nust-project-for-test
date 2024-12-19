import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
  // Import JwtModule
import { JwtStrategy } from './auth/jwt.strategy'; 

@Module({
  imports: [ItemsModule,JwtModule.register({ secret: '787gjhgj', signOptions: { expiresIn: '60m' } })],
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService,JwtStrategy],
})
export class AppModule {}
