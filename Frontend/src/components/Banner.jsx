import React from "react";
import banner from "../assets/banner.jpeg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container my-0 mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-blue-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Became a Author by posting blogs everyday. Here we providing opportunities to learn new things every day by posting or reading Blogs.
              <br />
              Start today by creating free account here..
              <br />
              <Link to={"/"} className="underline text-blue-600"> Create an Account</Link>
            </p>
          </div>
          <Link to="/post"><button className="btn mt-6 bg-blue-500 text-white hover:bg-blue-700">Post +</button></Link>
          
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[450px] md:h-[420px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
