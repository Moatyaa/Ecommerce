import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { cartContext } from "../../Context/CartContext";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getLoggedCart, removeCartItem, updateCount, clearCart } = useContext(cartContext);
  let [cart, getCartDetails] = useState([]);
  let [numItems, setNumItems] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  async function getCart() {
    setIsLoading(true);
    let response = await getLoggedCart();
    getCartDetails(response?.data?.data);
    setNumItems(response?.data?.numOfCartItems);
    setIsLoading(false);
  }

  async function update(id, count) {
    let response = await updateCount(id, count);
    getCartDetails(response.data?.data);
    setNumItems(response.data?.numOfCartItems);
  }

  async function deleteItem(id) {
    let response = await removeCartItem(id);
    getCartDetails(response.data.data);
    setNumItems(response.data.numOfCartItems);
  }

  async function clear() {
    let response = await clearCart();
    console.log(response);
    getCartDetails(response.data?.data);
    setNumItems(response.data?.numOfCartItems);
  }

  useEffect(() => {
      getCart();
      console.log(cart)
  }, []);

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Cart" />
      </Helmet>
      <div className="parent mt-3 p-3 bg-cart">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="fw-bolder">Shop Cart:</h4>
            <h6 className="text-main fw-bolder">
              Total Cart Price: {cart?.totalCartPrice}
            </h6>
            <h6 className="text-main fw-bolder">Cart items: {numItems}</h6>
          </div>
          <div>
            <button onClick={clear} className="btn p-2 fw-bolder brdr">
              Clear Cart
            </button>
          </div>
        </div>
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
          <div>
            {cart
              ? cart.products?.map((product) => (
                <div key={product._id} className="row row-border">
                  <div className="col-md-1">
                    <img
                      className="w-100"
                      src={product.product.imageCover}
                      alt=""
                    />
                  </div>
                  <div className="col-md-11">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div>
                          {product.product.title
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")}
                        </div>
                        <h6 className="text-main">
                          Price: {product.price}EGP
                        </h6>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            update(product.product._id, product.count + 1)
                          }
                          className="btn brdr"
                        >
                          +
                        </button>
                        <span className="m-2">{product.count}</span>
                        <button
                          disabled={product.count == 1}
                          onClick={() =>
                            update(product.product._id, product.count - 1)
                          }
                          className="btn brdr"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteItem(product.product._id)}
                      className="btn"
                    >
                      {" "}
                      <i className="fas fa-trash text-main"></i> Remove
                    </button>
                  </div>

                </div>
                
              ))
              : ''}
          </div>
        )}
            <div className="d-flex justify-content-around">
               <Link onClick={()=>localStorage.setItem('cartId' , cart._id)}  to={'/address'} className="btn bg-main text-white">Online Payment</Link>
                <button className="btn bg-main text-white">Payment on Delivery</button>
            </div>
      </div>
    </>
  );
}
