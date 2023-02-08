import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test")
  getData():any{
    return "Hello"
  }

  user:any = {
    name: "John",
    age: 30,
  }
  
  @Get("user")
  getUser():any{
    return this.user
  }


  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
