import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class PostsService {
    public constructor(
        private httpService: HttpService
    ) { };

    public getPostByUserId(id: number): Observable<[]> {
        return this.httpService
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .pipe(map((response: AxiosResponse) => response.data));;
    };

}
