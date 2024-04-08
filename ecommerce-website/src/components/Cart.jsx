import React from "react";
import Navbar from "./Navbar";
import Foooter from "./Foooter";
import "./Cart.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function Cart({ cart, setcart }) {
  //increase quantity of cart products
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setcart(
      cart.map((v) => {
        return v.id === product.id ? { ...exist, qty: exist.qty + 1 } : "";
      })
    );
  };
  //decrease quantity of cart products
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setcart(
      cart.map((v) => {
        return v.id === product.id ? { ...exist, qty: exist.qty - 1 } : "";
      })
    );
  };

  //remove product from cart

  const remmoveproduct = (product) => {
    const exist = cart.find((v) => {
      return v.id === product.id;
    });
    if (exist.qty > 0) {
      setcart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //Total Price

  const total=cart.reduce((price , item)=> price+item.qty * item.price , 0)

  return (
    <>
      <Navbar />
      <div className="cart">
        <h3>#Cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty_cart">
              <h2>Your shopping Cart is Empty</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="conatiner">
          {cart.map((v) => {
            return (
              <>
                <div className="cartbox">
                  <div className="img_box">
                    <img src={v.image} alt="" />
                  </div>
                  <div className="details">
                    <div className="info">
                      <h4>{v.cat}</h4>
                      <h3>{v.Name}</h3>
                      <p>Price: {v.price}</p>
                      <p>Total: ${v.price * v.qty}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => incqty(v)}>+</button>
                      <input type="number" value={v.qty}></input>
                      <button onClick={() => decqty(v)}>-</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => remmoveproduct(v)}>
                        <IoMdClose />
                      </li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom">
            {
                cart.length > 0 && 
                <>
                <div className="Total">
                    <h4>Sub Total: $ {total}</h4>
                </div>
                <button>Checkout</button>
                </>
            }
            
        </div>
      </div>

      <Foooter />
    </>
  );
}
