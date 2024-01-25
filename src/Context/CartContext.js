import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { userContext } from "./UserContext";

export let cartContext = createContext()
export default function CartContextProvider(props){

    let headers = {
        token: localStorage.getItem('token')
    }
    let [cartId , setCartId] = useState('')

    
    function addToCart(x){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId: x
        }, {
            headers: headers
        }).then((response) => response).catch((err) => err)
    }

    function getLoggedCart(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {
            headers:headers
        }).then((response)=>response).catch((err)=>err)
    }

    function removeCartItem(productId) { 
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers:headers})
        .then((response) => response)
        .catch((err) => err)
    }      

    function clearCart() { 
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {headers:headers})
        .then((response) => response)
        .catch((err) => err)
    }    

    function updateCount(productId , count) { 
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {count},{headers})
        .then((response) => response)
        .catch((err) => err)
    }

    function onlinePayment(productId , url , values) { 
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=${url}` , 
        {shippingAddress: values},
        {headers})
        .then((response) => response)
        .catch((err) => err)
    }

    async function getcartId(){
        let response = await getLoggedCart()
        setCartId(response?.data?.data?._id)
        console.log()
    }

    useEffect(()=> {
        getcartId()
    })

    return <>
        <cartContext.Provider value={{cartId , addToCart , getLoggedCart , removeCartItem , updateCount, clearCart, onlinePayment}}>
            {props.children}
        </cartContext.Provider>
    </>
}