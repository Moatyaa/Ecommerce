import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Compontents/Layout/Layout";
import Home from "./Compontents/Home/Home";
import Products from "./Compontents/Products/Products";
import Categories from "./Compontents/Categories/Categories";
import Brands from "./Compontents/Brands/Brands";
import Cart from "./Compontents/Cart/Cart";
import Login from "./Compontents/Login/Login";
import Register from "./Compontents/Register/Register";
import Notfound from "./Compontents/Notfound/Notfound";
import UserContextProvider, { userContext } from "./Context/UserContext";
import ProtectedRoute from "./Compontents/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Compontents/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import CategorieDetails from "./Compontents/CategoryDetails/CategoryDetails";
import WishListContextProvider from "./Context/WishlistContext";
import Wishlist from "./Compontents/Wishlist/Wishlist";
import Address from "./Compontents/Address/Address";
import Allorders from "./Compontents/Allorders/Allorders";
import { useContext, useEffect, useState } from "react";

export default function App() {
  let {token} = useContext(userContext)
  function reload(){
    return window.location.reload
  }
  useEffect(()=>{
    reload()
  },[token])
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
         path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        }, 
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login/> },
        { path: "/", element: <Login/> },
        { path: "productdetails/:id", element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
        { path: "categoryDetails/:id", element:<ProtectedRoute><CategorieDetails/></ProtectedRoute>},
        { path: "wishlist", element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
        { path: "allorders", element:<ProtectedRoute><Allorders/></ProtectedRoute>},
        { path: "address", element:<ProtectedRoute><Address/></ProtectedRoute>},
        { path: "register", element: <Register/> },
        { path: "*", element: <Notfound/> },
      ],
    },
  ]);
  return (
    <>  
      <WishListContextProvider>
        <CartContextProvider>
                <RouterProvider router={router}></RouterProvider>
          </CartContextProvider>
      </WishListContextProvider>
    </>
  );
}
