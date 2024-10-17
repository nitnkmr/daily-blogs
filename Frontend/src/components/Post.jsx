import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../baseUrl";



const Post = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    
    const localUser = JSON.parse(localStorage.getItem('user'));
  

    const handlePostSubmit = (data) => {
        postData({...data,...localUser});
    };

    const postData = (data) => {
        axios
            .post(BASE_URL + "/blog", data)
            .then(function (response) {
                navigate("/blogs")
                toast.success("Success "+ response.data.message);
            })
            .catch(function (error) {
                toast.error( error.data.message);
                console.log(error);
            });
    };
            




    return (
        <>
           <div className=" mx-auto container flex flex-col pt-4 h-screen item-center">
            <div className="wrap w-1/2 dark:bg-slate-950  shadow-2xl p-5 mx-auto rounded-lg">
                   <div className="flex justify-between"> <span > Post An Article</span> <span className="p-1 rounded-full hover:bg-slate-200 transition-all duration-500 ease-in-out " onClick={()=>navigate(-1)}>❌</span></div>
                    <p className="text-slate-500 text-sm">Press Esc key to close</p>
                    <div className=" w-full">
                        <form className="w-full modal-backdrop gap-3" onSubmit={handleSubmit(handlePostSubmit)}>
                           
                            <input
                                type="text"
                                id=""
                                className=" textarea textarea-bordered rounded p-1 px-3 w-full text-black dark:bg-slate-700 dark:text-white dark:border dark:border-white"
                                name="title"
                                {...register("title")}
                                placeholder="Title"
                                required
                            />
                            <input
                                type="text"
                                id=""
                                className=" textarea textarea-bordered rounded p-1 px-3 w-full text-black dark:bg-slate-700 dark:text-white dark:border dark:border-white"
                                name="description"
                                {...register("description")}
                                placeholder="Description"
                                required
                            />
                            <input
                                type="text"
                                id=""
                                className=" textarea textarea-bordered rounded p-1 px-3 w-full text-black dark:bg-slate-700 dark:text-white dark:border dark:border-white"
                                name="context"
                                {...register("context")}
                                placeholder="Context"
                                required
                            />
                            <input
                                type="url"
                                id=""
                                className=" textarea textarea-bordered rounded p-1 px-3 w-full text-black dark:bg-slate-700 dark:text-white dark:border dark:border-white"
                                name="image"
                                {...register("image")}
                                placeholder="Paste your Image Url"
                                required
                            />
                                <input className="border my-2 py-2 px-6 rounded-md text-black dark:text-white hover:bg-blue-500 hover:text-white" type="submit" value='Submit' />
                        </form>
                    </div>
                       
                    
                    </div>
                    
                </div>
           
                {/* onClick={handlePostSubmit} */}
            
        </>
    );
};

export default Post;
