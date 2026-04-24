// apps/api/src/modules/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../../database/models/user.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findByEmail(email: string) {
    return this.userModel.findOne({ email: email.toLowerCase().trim() }).exec()
  }

  findById(id: string) {
    return this.userModel.findById(id).exec()
  }

  async createUser(data: { name: string; email: string; passwordHash: string; role: string; country?: string }) {
    const user = new this.userModel(data)
    return user.save()
  }
}
