import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { userContext } from "../../Context/UserContext";
import { useContext, useEffect } from "react";
import { Offline, Online } from "react-detect-offline";
export default function Layout (){
    let {setToken} = useContext(userContext)
    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token') != null){
            setToken(localStorage.getItem('token'));
        }
    },[])

    return <>
        <Navbar/>
        <div className="container">
            <Outlet></Outlet>
        </div>
        <div className="network">
            <Offline><i className="fas fa-wifi"></i> You are offline</Offline>
        </div>
    </>
}