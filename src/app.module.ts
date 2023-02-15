import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { StudentController } from './students/StudentController';
import { userSchema } from './users/schemas/user.schema';
import { UsersModule } from './users/users.module';
//decorarators

@Module({
  imports: [
    // UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017',{
      dbName: "jar",}),
      BlogModule
  
  ],
  controllers: [AppController,StudentController],
  providers: [AppService],
})
export class AppModule {}
