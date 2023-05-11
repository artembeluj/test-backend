import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
        HttpModule,
        MulterModule.register({
            dest: './temp',
        })
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }
