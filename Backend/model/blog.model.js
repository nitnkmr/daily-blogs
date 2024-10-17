import mongoose from "mongoose";

const blogSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    context: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},{ timestamps: true });
const Blog = mongoose.model("Blogs", blogSchema);

export default Blog;