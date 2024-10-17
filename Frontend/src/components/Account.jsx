import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BASE_URL = 'http://localhost:4001'

const Account = () => {
    const [userInfo, setUserInfo] = useState({ email: JSON.parse(localStorage.getItem("user")).email })
    const [userActivity, setUserActivity] = useState([])

    // console.log(userActivity.data.length)

    const postData = (data) => {
        axios
            .post(BASE_URL + "/blog/account", data)
            .then(function (response) {
                setUserActivity(response.data.data)

            })
            .catch(function (error) {
                toast.error(error.data.message);
                console.log(error);
            });
    };

    useEffect(() => {
        postData(userInfo)

    }, [])
    console.log();
    const showWarning=()=>{
        toast.error("We will Add this Feature Soon⌛!!  You Can Still Enjoy Other Features")
    }
    

    return (
        <>
            <div className="container  mx-auto h-screen">
                <div className="userCard flex flex-col p-4 gap-2">
                    <div>Name : {JSON.parse(localStorage.getItem("user")).fullname}</div>
                    <div>Email : {JSON.parse(localStorage.getItem("user")).email} </div>
                    <div>Total Articles : {userActivity.length>1? userActivity.length : "You haven't posted anything"}</div>
                    <div>User Since : {((JSON.parse(localStorage.getItem("user")).createdAt)).split("T")[0]} </div>
                </div>
                
                <div className="list dark:bg-slate-900">   
                        <div className="overflow-x-auto m-5 p-4"><div className="text-center p-2">Here is the List of Article You have Posted</div> <hr />
                            <table className="table-pin-row table-xs table-pin-rows table-pin-cols  ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>--- Description ---</th>
                                        <th>Posted On</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Visit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userActivity ? userActivity.map((e,index) => {
                                        return (
                                            <tr key={e._id} className="border-t">
                                                <th>{index+1}</th>
                                                <td>{e.title}</td>
                                                <td>{e.description}</td>
                                                <td>12/16/2020</td>
                                                <td><button onClick={showWarning} className="btn btn-outline btn-success">Edit</button></td>
                                                <td><button onClick={showWarning} className="btn btn-outline btn-error">Delete</button></td>
                                                <td><Link to='/details' state ={{data:e}}><button className="btn btn-outline btn-primary">Read Full Article</button></Link></td>
                                            </tr>
                                        )
                                    }) : ""}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Account;
