import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class CommentsService {
    public constructor(
        private httpService: HttpService
    ) { };

    public getCommentsByPostId(postId: number): Observable<[]> {
        return this.httpService
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .pipe(map((response: AxiosResponse) => response.data));
    };
}
