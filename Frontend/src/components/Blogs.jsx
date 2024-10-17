import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../baseUrl.js'
import toast from 'react-hot-toast'

const Blogs = () => {
    console.log(BASE_URL);
    

    const [blogs, setBlogs] =useState([])
    useEffect(() => {
        const getBlogs = async () => {
          try {
            const res = await axios.get(BASE_URL+"/blog");
         
            setBlogs(res.data);
          } catch (error) {
            console.log(error);
          }
        };
        getBlogs();
           toast.promise(getBlogs(), {
                loading: 'Loading',
                success: 'Loaded',
                error: 'Error when fetching',
              });
      }, []);
    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-center font-bold p-2 font-serif text-xl'>Top Articles</h1>
                {/* <h1 className='text-center font-bold text-xl'>filters</h1> */}
                <ul className='py-4 px-1'>
                    {
                        blogs.length>0 ? blogs.map((ele)=>{
                            return(
                            <li className=' mt-4 min-h-[200px] cursor-pointer' key={ele._id}>
                            <div className="card card-side bg-base-100 shadow  border dark:bg-slate-800">
                                <figure>
                                    <img
                                        src={ele.image}
                                        alt="src img" 
                                        className='object-contain sm:h-[250px] sm:min-w-[250px] size-9 m-4 py-1 rounded-lg'/>
                                </figure>
                                <div className="card-body max-w-[80%] ">
                                    <h2 className="card-title">{ele.title}</h2>
                                    <p>{ele.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link to='/details' state ={{data:ele}}><button className="btn btn-primary">Read Full Article</button></Link>
                                    </div>
                                </div>
                            <div className='absolute bottom-2 left-2 text-[10px] text-slate-400'>Posted by : {ele.fullname}</div>
                            </div>
                        </li>)
                        }):"No Blogs"
                    }
                   
                </ul>
            </div>
        </>
    )
}

export default Blogs