// apps/api/src/modules/auth/auth.controller.ts
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import type { Request, Response } from 'express'

const COOKIE_NAME = 'glb_token'

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const { user, token } = await this.auth.register(body)
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false, // prod में true + https
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    return {
      user: { id: user._id, name: user.name, email: user.email, role: user.role, country: user.country },
    }
  }

  @Post('login')
  async login(@Body() body: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { user, token } = await this.auth.login(body.email, body.password)
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    return {
      user: { id: user._id, name: user.name, email: user.email, role: user.role, country: user.country },
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(COOKIE_NAME)
    return { ok: true }
  }

  @Get('me')
  async me(@Req() req: Request) {
    const token = (req.cookies && (req.cookies as any)[COOKIE_NAME]) || (req.headers.authorization || '').replace('Bearer ', '')
    if (!token) return { user: null }
    const user = await this.auth.verifyToken(token)
    return {
      user: { id: user._id, name: user.name, email: user.email, role: user.role, country: user.country },
    }
  }
}
