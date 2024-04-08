import React, { useState } from "react";
import Foooter from "./Foooter";
import Navbar from "./Navbar";
import "./Shop.css";
import Homepro from "./Homeproduct";
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

export default function Shop({ cart, setcart }) {
  const [shop, setshop] = useState(Homepro);

  const addtocart = (v) => {
    const exist = cart.find((x) => {
      return x.id === v.id;
    });
    if (exist) {
      alert("This Product is already added");
    } else {
      setcart([...cart, { ...v, qty: 1 }]);
      alert("Added to cart");
    }
  };
  //Toggle product details

  const [showdetails, setshowdetails] = useState(false);
  const [details, setdetails] = useState([]);

  const detailpage = (product) => {
    const detaildata = [{ product }];
    const productdetails = detaildata[0]["product"];
    setdetails(productdetails);

    setshowdetails(true);
  };

  const shoppageproduct = shop.map((v, i) => {
    return (
      <Shoppageproductconatiner
        v={v}
        key={i}
        addtocart={addtocart}
        detailpage={detailpage}
      />
    );
  });

  const Filter = (v) => {
    const catefilter = Homepro.filter((product) => {
      return product.cat === v;
    });
    setshop(catefilter);
  };

  const allcatfilter = () => {
    setshop(Homepro);
  };

  return (
    <>
      <Navbar shop={shop} setshop={setshop} />
      {showdetails ? (
        <>
          <div className="product_details_shop">
            <button onClick={() => setshowdetails(!showdetails)}>
              <IoMdClose />
            </button>
            <div className="container">
              <div className="img_box">
                <img src={details.image} alt="" />
              </div>
              <div className="info">
                <h4># {details.cat}</h4>
                <h2>{details.Name}</h2>
                <h3>Lorem ipsum Quas, quisquam provident rerum quaerat reprehenderit corporis repudiandae in debitis solu</h3>
                <p>$ {details.price}</p>
                <button onClick={()=> addtocart(details)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="shop">
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className="conatiner">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>All Categories</h3>
              </div>
              <div className="shopbox">
                <ul>
                  <li onClick={() => allcatfilter()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("camera")}># camera</li>
                  <li onClick={() => Filter("mobile")}># mobile</li>
                  <li onClick={() => Filter("headphones")}># headphones</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_left.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_top.webp" alt="" />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_conatiner">{shoppageproduct}</div>
            </div>
          </div>
        </div>
      </div>

      <Foooter />
    </>
  );
}

let Shoppageproductconatiner = ({ v, addtocart, detailpage }) => {
  return (
    <>
      <div className="productshopbox">
        <div className="img_box">
          <img src={v.image} alt="" />
          <div className="icon">
            <li>
              {" "}
              <FaHeart />
            </li>
            <li onClick={() => detailpage(v)}>
              <FaRegEye />
            </li>
          </div>
        </div>
        <div className="details">
          <h3>{v.Name}</h3>
          <p> $ {v.price}</p>
          <button onClick={() => addtocart(v)}>Add To Cart</button>
        </div>
      </div>
    </>
  );
};
