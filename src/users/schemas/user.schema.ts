import { NestFactory } from "@nestjs/core";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

//extends
@Schema()
class UserSchema{

    @Prop({
        required: true,
    })
    name: string;
    @Prop({
        required: true,
    })
    email: string;
}
export const userSchema  =  SchemaFactory.createForClass(UserSchema);