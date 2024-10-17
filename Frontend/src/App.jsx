import React, { useEffect } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Detailspage from "./components/Detailspage";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Post from "./components/Post";
import Account from "./components/Account";

function App() {
  const [authUser, setAuthUser] = useAuth(false);
  console.log(authUser)
  
  useEffect( ()=>{
    const user =  localStorage.getItem("user");
    setAuthUser(JSON.parse(user))

  },[])
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Navbar auth ={authUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/post"
            element={authUser ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/account"
            element={authUser ? <Account /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Detailspage />} />
          <Route path="/blogs" element={<Blogs />} />
          
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
