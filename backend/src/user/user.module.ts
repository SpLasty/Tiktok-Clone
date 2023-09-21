import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { AuthService } from 'src/auth/auth.service'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma.service'

@Module({
  imports: [],
  controllers: [],
  providers: [UserService, JwtService, AuthService, UserResolver, ConfigService,PrismaService],
  exports: [],
})
export class UserModule {}