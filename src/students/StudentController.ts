import { Controller, Get, HttpStatus, Post, Req, Res } from "@nestjs/common";


@Controller("student")
export class StudentController{


        @Get("get")
        getAllStudents() : any{
            return "all stduents";
        }

        @Get("get1")
        sendCustomRes(@Req() req,@Res() res):any{

                res.status(HttpStatus.CREATED).json({
                    message: "Hello"
                })
            
        }
        @Post("post")
        addStduents(@Req() req,@Res() res):any{
            console.log(req.body);
            res.status(HttpStatus.CREATED).json({
                message: "data ay gayo....."
            })

        }

}