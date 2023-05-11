import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Observable, map } from 'rxjs';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class UsersService {
    public constructor(
        private httpService: HttpService
    ) { };

    public getAllUsers(): Observable<[]> {
        return this.httpService
            .get('https://jsonplaceholder.typicode.com/users')
            .pipe(map((response: AxiosResponse) => response.data));
    };

    public getUserById(userId: number): Observable<[]> {
        return this.httpService
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .pipe(map((response: AxiosResponse) => response.data));
    };

    public async saveUserPhoto(userId: number, photo: any): Promise<void> {
        const { path: tempUpload, originalname } = photo;
        const extention = originalname.split(".").pop();
        const filename = `${userId}.${extention}`;
        const uploadPath = path.join(__dirname, '../../', 'uploads', filename);
        await fs.move(tempUpload, uploadPath, { overwrite: true });
    };
}
