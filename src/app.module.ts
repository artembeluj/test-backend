import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    HttpModule,
    CommentsModule,
    PostsModule,
    UsersModule
  ]
})
export class AppModule { }
