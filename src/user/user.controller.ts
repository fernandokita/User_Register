import { Body, Controller, Get, Post } from '@nestjs/common';
import User from './user.entity';

@Controller('user')
export class UserController {
    @Post()
    async create(@Body()user: User ){
         return user;
    }
}
