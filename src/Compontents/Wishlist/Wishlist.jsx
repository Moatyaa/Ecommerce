import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { wishListContext } from "../../Context/WishlistContext";
import { Audio } from "react-loader-spinner";
import { cartContext } from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Wishlist() {
  let { removeItem, getUserWishList } = useContext(wishListContext);
  let { addToCart } = useContext(cartContext);
  let [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState([]);
  async function getList() {
    setIsLoading(true);
    let { data } = await getUserWishList();
    setData(data);
    setIsLoading(false);
  }

  async function addProduct(id) {
    let response = await addToCart(id);
    if (response.data.status == "success") {
      toast.success(response.data.message);
    }
  }

  async function remove(id) {
    let { data } = await removeItem(id);
    setData(data);
    getList();
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <Helmet>
        <title>WishList</title>
        <meta name="description" content="products" />
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <h3 className="mt-4 fw-bolder">WishList</h3>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <Audio
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={"true"}
          />
        </div>
      ) : (
        <div className="row mt-5 gx-1">
          {data?.data
            ? data?.data.map((item, index) => (
                <div key={index} className="col-md-3 p-2">
                  <Link to={`/productdetails/${item.id}`}>
                    <img className="w-100" height={400} src={item.imageCover} alt="" />
                    <div className="d-flex justify-content-between p-2">
                        <h6>{item.title.split(" ").slice(0, 2).join(" ")}</h6>
                        <p className="h6">{item.price} EGP</p>
                    </div>                 
                  </Link>
                  <div className="d-flex justify-content-around">
                        <button
                        onClick={() => remove(item._id)}
                        className="btn button bg-main text-white"
                        >
                        Remove product
                        </button>
                        <button
                        onClick={() => addProduct(item._id)}
                        className="btn button bg-main text-white"
                        >
                        Add to cart
                        </button>
                    </div>   
                </div>
              ))
            : ""}
        </div>
      )}
    </>
  );
}
