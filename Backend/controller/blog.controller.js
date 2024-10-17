import Blog from "../model/blog.model.js";

export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json(blog);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
export const postBlog = async (req, res) => {
    try {
        const body = req.body;
        const result = await Blog.create({
            title: body.title,
            description: body.description,
            context: body.context,
            image: body.image,
            email: body.email,
            fullname: body.fullname,
        })
        console.log(result)
        res.status(200).json({massage:"Blog Posted Successfully"});
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getAccount=async(req,res)=>{
    try {
        const body =  req.body;
        const result = await Blog.find({email:body.email})
        res.status(201).json({data:result})
        
    } catch (error) {
        res.status(404).json({massage:error.massage}) 
    }
}