import axios from "axios";
import { createContext } from "react";

export let wishListContext = createContext()
export default function WishListContextProvider(props){
    let headers = {
        token : localStorage.getItem('token')
    }

    function getUserWishList(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist' , {
            headers 
        }).then(res => res).catch(err => err)
    }

    function addToWishList(productId){
        return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist' ,  {
            productId  : productId
        },{
            headers 
        }).then(res => res).catch(err => err)
    }

    function removeItem(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` , {
            headers
        })
    }

    return <>
        <wishListContext.Provider value={{getUserWishList , addToWishList , removeItem}}>
            {props.children}
        </wishListContext.Provider>  
    </> 

}