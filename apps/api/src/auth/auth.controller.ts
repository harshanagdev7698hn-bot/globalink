// apps/api/src/auth/auth.controller.ts
import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    // user create + password hash + etc.
    const user = await this.authService.register(dto);
    // front-end isi shape ko expect karega
    return { user };
  }

  // ... baaki login / me routes
}
