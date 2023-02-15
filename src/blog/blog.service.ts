import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBlog } from './interfaces/blog.interface';

@Injectable()
export class BlogService {

    constructor(@InjectModel('Blog') private blogModel:Model<IBlog>){}
    ///database...
    async getAllBlogs():Promise<IBlog[]>{

        return await this.blogModel.find()

    }
    async getBlogById(id:string):Promise<IBlog>{

        return await this.blogModel.findById(id)
    }

}
