// auth.controller.ts
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    // In a real application, you'd authenticate the user and return a token
    return this.authService.login({ username: 'testuser', userId: 1 });
  }
}
