import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getData(){
        //it will replace by data base....
        return { message: 'Welcome to api!' };
    }

}
