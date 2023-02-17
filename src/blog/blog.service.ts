import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/blog.dto';
import { IBlog } from './interfaces/blog.interface';

@Injectable()
export class BlogService {

    constructor(@InjectModel('Blog') private blogModel:Model<IBlog>){}
    ///database...
    async getAllBlogs():Promise<IBlog[]>{

        return await this.blogModel.find()

    }
    async getBlogById(id:string):Promise<IBlog>{

        //if else...
        return await this.blogModel.findById(id)
    }
    

    async deleteBlog(id:string):Promise<IBlog>{

        //if else...
        return await this.blogModel.findByIdAndDelete(id)
    }

    async createBlog(createBlogDto:CreateBlogDto):Promise<IBlog>{

            try{

                    // var user = userSchema ({
                    //     name: req.body.name
                    //})
                    // user.save()
                const blog = new this.blogModel({
                    title: createBlogDto.title,
                    description: createBlogDto.description,
                    content: createBlogDto.content
                })
                return await blog.save()


            }catch(err){

                    throw new HttpException("error while saving blog",HttpStatus.BAD_REQUEST)

            }


    }





}
