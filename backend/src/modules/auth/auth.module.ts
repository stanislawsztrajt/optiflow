import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
