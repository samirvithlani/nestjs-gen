import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
})