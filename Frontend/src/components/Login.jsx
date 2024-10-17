import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

 const BASE_URL = 'http://localhost:4001'

function Login() {
  const [userData, setUserData] = useState({})
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();
    const handleUserSubmit = () => {
        postData(userData);
    };

    const postData =  (data)=>{
        axios.post(BASE_URL+"/user/login", data)
          .then(function (response) {
            toast.success("Loggedin Successfully", response.message);
            console.log(response.data.user)
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/")
             window.location.reload();
          })
          .catch(function (error) {
            toast.error("Error: " + error.response.data.message);
            setErrorMassage(error.response.data.message)
          });

    }
  
  return (
    <div className="container p-4 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl dark:bg-slate-800">
        <figure className="lg:w-1/2 w-full">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Album"
            className=" lg:w-[60%] rounded-full mx-auto w-[40%]" />
        </figure>
        <div className="card-body">

          <h1 className="text-2xl font-bold cursor-pointer"> Welcome to Daily <span className="text-blue-500">Blogs!</span></h1>
          <h1>Login to your Account</h1>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" name="email"
                onChange={(e) =>
                  setUserData({ ...userData, [e.target.name]: e.target.value })
                } />
          </label>
          <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" name="password"
                onChange={(e) =>
                  setUserData({ ...userData, [e.target.name]: e.target.value })
                } />
            </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="submit" className="grow" value="Login" onClick={handleUserSubmit} />
          </label>
          <p className="text-[10px] text-red-500"> {errorMassage?"**"+errorMassage +"**":""} </p>
          <h2>New Here?
            <br />
             Trying <Link to={"/signup"} className="underline text-blue-500">Sign Up !</Link></h2>

          
        </div>
      </div>
      <div className="text-center p-3">You must have to login in order to Post an Article here</div>
    </div>
  );
}

export default Login;
