import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/blog.dto';

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

    @Delete("blog/:id")
    async deleteBlog(@Req() req,@Res()res){
            //if else...
            res.status(HttpStatus.OK).json({
                message: "blog deleted",
                data: await this.service.deleteBlog(req.params.id)
            })  
    }
    @Post("blog")
    async createBlog(@Body() createBlogDto:CreateBlogDto,@Res() res){

        res.status(HttpStatus.CREATED).json({
            message: "blog created",
            data: await this.service.createBlog(createBlogDto)
        })

    }
}
