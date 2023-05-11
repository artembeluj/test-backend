import { Controller, Get, Param } from '@nestjs/common';

import { Observable } from 'rxjs';

import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    public constructor(
        private commentsService: CommentsService
    ) { };

    @Get(':id')
    public getCommentsByPostId(@Param('id') id: number): Observable<[]> {
        return this.commentsService.getCommentsByPostId(id);
    };
}
