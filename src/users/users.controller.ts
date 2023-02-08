import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userservice:UsersService){}


    @Get()
    getusers(@Res() res){

        //let data = this.userservice.getData();
        return res.status(HttpStatus.OK).json({
            
            data : this.userservice.getData()
        })
            // res.status(HttpStatus.OK).json({
            //     message: "Welcome to api!"
            // })
    }

}
