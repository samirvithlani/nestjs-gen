import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    constructor(private service:BlogService){}

    @Get("blog")
    async getAllBlogs(@Req() req,@Res()res){

        res.status(HttpStatus.OK).json({
            message: "All blogs",
            data: await this.service.getAllBlogs()
        })

    }
    @Get("blog/:id")
    async getAllBlogBYId(@Req() req,@Res()res){

        res.status(HttpStatus.OK).json({
            message: "blog",
            data: await this.service.getBlogById(req.params.id)
        })

    }
}
