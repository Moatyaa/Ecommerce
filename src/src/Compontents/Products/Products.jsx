import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/UserContext";
import axios from "axios";
import { useQuery } from "react-query";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function Products() {
  let { addToCart } = useContext(cartContext);

  async function addProduct(id) {
    let response = await addToCart(id);
    if (response.data.status == "success") {
      toast.success(response.data.message);
    }
  }

  function featuredProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  let { isLoading, data } = useQuery("getData", featuredProducts);

  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="products" />
      </Helmet>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <Audio
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      ) : (
        <div className="row mx-3">
          <div className="h4 my-3">Featured Products</div>
          <Toaster position="top-center" reverseOrder={false} />
          {data?.data.data
            ? data.data.data.map((product) => (
                <div key={product.id} className="col-md-2 product p-3">
                  <Link to={`/productdetails/${product.id}`}>
                    <img
                      className="w-100"
                      src={product.imageCover}
                      alt={product.title}
                    />
                    <span className="text-main font-sm">
                      {product.category.name}
                    </span>
                    <div className="h6">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </div>
                    <ul className="list-unstyled d-flex justify-content-between my-1 font-sm">
                      <li>
                        <span>{product.price}</span>EGP
                      </li>
                      <li>
                        <i className="fa-solid fa-star rating-color"></i>
                        {product.ratingsAverage}
                      </li>
                    </ul>
                  </Link>
                  <button
                    onClick={() => {
                      addProduct(product.id);
                    }}
                    className="btn bg-main font-sm text-white"
                  >
                    add to cart
                  </button>
                </div>
              ))
            : ""}
        </div>
      )}
    </>
  );
}
