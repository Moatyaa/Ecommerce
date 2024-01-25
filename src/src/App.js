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
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./Compontents/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Compontents/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

export default function App() {
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
        { index:true , path: "login", element: <Login/> },
        { path: "productdetails/:id", element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
        { path: "register", element: <Register/> },
        { path: "*", element: <Notfound/> },
      ],
    },
  ]);
  return (
    <>  
    <Provider store={store}>
      <CartContextProvider>
          <UserContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </UserContextProvider>
      </CartContextProvider>
    </Provider>
    

    </>
  );
}
