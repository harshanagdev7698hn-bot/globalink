// apps/api/src/app.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // NOTE: make sure MONGODB_URI is set in apps/api/.env
    MongooseModule.forRoot(process.env.MONGODB_URI ?? ''),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
