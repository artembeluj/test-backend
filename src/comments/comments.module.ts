import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';


@Module({
    imports: [HttpModule],
    controllers: [CommentsController],
    providers: [CommentsService]
})
export class CommentsModule {}
