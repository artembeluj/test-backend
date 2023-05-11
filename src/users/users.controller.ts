import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {

    public constructor(
        private usersService: UsersService
    ) { };

    @Get()
    public getUsers(): Observable<[]> {
        return this.usersService.getAllUsers();
    };

    @Get('/:id')
    public getById(@Param('id') id: number): Observable<[]> {
        return this.usersService.getUserById(id);
    };

    @Post(':id/photo')
    @UseInterceptors(FileInterceptor('photo'))
    public async uploadPhoto(@Param('id') id: number, @UploadedFile() photo) {

        if (photo.mimetype.startsWith('image/')) {
            await this.usersService.saveUserPhoto(id, photo);
            console.log(photo)
        } else {
            throw new Error('Invalid file type. Only images are allowed.');
        };
    };
}
