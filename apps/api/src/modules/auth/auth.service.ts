import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcryptjs'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwt: JwtService) {}

  // user ko any rakha hai taaki _id par TS error na aaye
  private signToken(user: any) {
    return this.jwt.sign({
      sub: user._id.toString(),
      role: user.role,
      email: user.email,
      name: user.name,
    })
  }

  async register(data: { name: string; email: string; password: string; role: string; country?: string }) {
    const existing = await this.usersService.findByEmail(data.email)
    if (existing) {
      throw new BadRequestException('Email already registered')
    }

    const passwordHash = await bcrypt.hash(data.password, 10)
    const user = await this.usersService.createUser({
      name: data.name,
      email: data.email,
      passwordHash,
      role: data.role,
      country: data.country,
    })

    const token = this.signToken(user)
    return { user, token }
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)
    if (!user) throw new UnauthorizedException('Invalid credentials')

    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) throw new UnauthorizedException('Invalid credentials')

    const token = this.signToken(user)
    return { user, token }
  }

  async verifyToken(token: string) {
    const payload = this.jwt.verify(token)
    const user = await this.usersService.findById(payload.sub)
    if (!user) throw new UnauthorizedException()
    return user
  }
}
