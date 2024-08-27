import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
  imports:[DbModule]
})
export class UserModule {}
