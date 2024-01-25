import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext()
export default function CartContextProvider(props){
    let headers = {
        token: localStorage.getItem('token')
    }

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

    return <>
        <cartContext.Provider value={{addToCart , getLoggedCart , removeCartItem , updateCount, clearCart}}>
            {props.children}
        </cartContext.Provider>
    </>
}