// apps/api/src/database/models/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserRole = 'buyer' | 'consultant' | 'lab' | 'seller' | 'admin'

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name!: string

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email!: string

  @Prop({ required: true })
  passwordHash!: string

  @Prop({ required: true, enum: ['buyer', 'consultant', 'lab', 'seller', 'admin'], default: 'buyer' })
  role!: UserRole

  @Prop()
  country?: string

  @Prop({ default: false })
  verified!: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
