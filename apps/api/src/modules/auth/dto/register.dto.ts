// apps/api/src/modules/auth/dto/register.dto.ts
import { IsEmail, IsIn, IsOptional, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @IsString()
  name!: string

  @IsEmail()
  email!: string

  @IsString()
  @MinLength(6)
  password!: string

  @IsIn(['buyer', 'consultant', 'lab', 'seller'])
  role!: 'buyer' | 'consultant' | 'lab' | 'seller'

  @IsOptional()
  @IsString()
  country?: string
}
