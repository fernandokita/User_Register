import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TempModule } from './temp/temp.module';

@Module({
  imports: [UserModule, TempModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
