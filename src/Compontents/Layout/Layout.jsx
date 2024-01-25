import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { userContext } from "../../Context/UserContext";
import { useContext, useEffect } from "react";
import { Offline, Online } from "react-detect-offline";
import Footer from "../Footer/Footer";
import useNetwork from "../../Hooks/useNetwork";

export default function Layout (){
    let x = useNetwork()
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
        <Footer/>
        <div className="network">
            {x}
        </div>
    </>
}