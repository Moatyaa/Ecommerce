import { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { wishListContext } from "../../Context/WishlistContext";

export default function Products() {
  let {addToCart} = useContext(cartContext);
  let {addToWishList} = useContext(wishListContext)
  
  async function addProduct(id) {
    let response = await addToCart(id);
    if(response.data.status != null) {
      if (response.data.status == "success") {
        toast.success(response.data.message);
      }
    }
  }

  async function addToWish(id) {
    let response = await addToWishList(id);
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
                  <div className="d-flex justify-content-between w-100">
                    <button
                      onClick={() => {
                        addProduct(product.id);
                      }}
                      className="btn bg-main text-white"
                    >
                      add to cart
                    </button>
                    <button onClick={()=>{addToWish(product.id)}} className="btn text-main heart">
                      <i className="fa-solid fa-heart fs-5"></i>
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
