import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    public constructor(
        private postService: PostsService
    ) { };

    @Get(':id')
   public getPostsByUserId(@Param('id') id: number): Observable<[]> {
        return this.postService.getPostByUserId(id);
    };
}
