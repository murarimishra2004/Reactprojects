import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { Link } from "react-router-dom";
import Homepro from "./Homeproduct";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Foooter from "./Foooter";

export default function Home() {
  let [newproduct, setnewproduct] = useState([]);
  let [Featuredproduct, setFeaturedproduct] = useState([]);
  let [Topproduct, setTopproduct] = useState([]);
  let [trending, settrending] = useState(Homepro);
  //filterproduct
  let filtercate = (x) => {
    const filteproduct = Homepro.filter((v) => {
      return v.type === x;
    });
    settrending(filteproduct);
  };

  const alltrendingproduct = () => {
    settrending(Homepro);
  };

  let items = trending.map((v, i) => {
    return <Homepageproduct v={v} key={i} />;
  });
  const productcategory = () => {
    //new product category
    const newcategory = Homepro.filter((x) => {
      return x.type === "new";
    });
    setnewproduct(newcategory);

    //featuredproduct category
    const featuredproductcategory = Homepro.filter((v) => {
      return v.type === "featured";
    });
    setFeaturedproduct(featuredproductcategory);

    //top product

    const topcategory = Homepro.filter((v)=>{
      return v.type === "top"
    })
    setTopproduct(topcategory)
  };

  const newproducts = newproduct.map((v, i) => {
    return <Newproduct v={v} key={i} />;
  });

  //featured product
  const featuringProducts = Featuredproduct.map((product, index )=>{
    return <Featured key={index} v={product}/>
  })

  //top category

  const topcategories= Topproduct.map((v,i)=>{
    return <TopnewProduct key={i} v={v}/>
  })

  useEffect(() => {
    productcategory();
  }, []);

  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="top_banner">
          <div className="contant">
            <h3>silver aluminum</h3>
            <h2>Applce Watch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => alltrendingproduct()}>trending product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">{items}</div>
              </div>
              <button
                className="btn"
                style={{
                  marginLeft: "45%",
                  padding: "10px 30px ",
                  marginTop: "20px",
                  background: "none",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                  fontWeight: "600",
                  background: "#cd1e76",
                  cursor: "pointer",
                }}
              >
                Show More
              </button>
            </div>
            <div className="right_box">
              <div className="conatiner">
                <div className="testiomoial">
                  <div className="head">
                    <h3>Our Tetimonial</h3>
                  </div>
                  <div className="detail">
                    <div className="imgbox">
                      <img src="image/T1.avif" />
                    </div>
                    <div className="info">
                      <h3>Stephen Robot</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum vero, incidunt dicta culpa expedita omnis
                      </p>
                    </div>
                  </div>
                </div>
                <div class="newsletter">
                  <h2>Subscribe to our newsletter</h2>
                  <ul className="social-icons">
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaLinkedin />
                  </ul>
                  <div className="search-box">
                    <input type="text" placeholder="Enter your email address" />
                    <button type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_banner">
          <div className="containerbanner">
            <div className="leftbox">
              <div className="boxbanner">
                <img src="image/Multi-Banner-1.avif" />
              </div>
              <div className="boxbanner">
                <img src="image/Multi-Banner-2.avif" />
              </div>
            </div>
            <div className="rightboxx">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" />
                <img src="image/Multi-Banner-4.avif" />
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="New-product">
          <div className="New-productcontiner">
            <div className="New-productbox">
              <div className="New-productheader">
                <h2>New Product</h2>
              </div>
              {newproducts}
            </div>
            <div className="New-productbox">
              <div className="New-productheader">
                <h2>Featured Product</h2>
              </div>
              {featuringProducts}
            </div>
            <div className="New-productbox">
              <div className="New-productheader">
                <h2>Top Products</h2>
              </div>
              {topcategories}
            </div>
          </div>
        </div>
      </div>
      <Foooter/>
    </>
  );
}

let Homepageproduct = ({ v, i }) => {
  return (
    <>
      <div className="box">
        <div className="img_box" key={i}>
          <img src={v.image}></img>
          <div className="icon">
            <div className="iconbox">
              <FaRegEye />
            </div>
            <div className="iconbox">
              <FaHeart />
            </div>
          </div>
        </div>
        <div className="info">
          <h3>{v.Name}</h3>
          <p>${v.price}</p>
          <button>Add to Cart</button>
          {/* <Link to='/cart'>Add to Cart</Link> */}
        </div>
      </div>
    </>
  );
};

let Newproduct = ({ v, i }) => {
  return (
    <>
      <div className="boxnewproduct">
        <div className="imgbox">
          <img src={v.image}></img>
        </div>
        <div className="detail">
          <h3>{v.Name}</h3>
          <p>$ {v.price}</p>
          <div className="icon">
            <button>
              <FaRegEye />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

let Featured = ({ v }) => {
  return (
    <>
      <div className="boxnewproduct">
        <div className="imgbox">
          <img src={v.image}></img>
        </div>
        <div className="detail">
          <h3>{v.Name}</h3>
          <p>$ {v.price}</p>
          <div className="icon">
            <button>
              <FaRegEye />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

let TopnewProduct = ({ v }) => {
  return (
    <>
      <div className="boxnewproduct">
        <div className="imgbox">
          <img src={v.image}></img>
        </div>
        <div className="detail">
          <h3>{v.Name}</h3>
          <p>$ {v.price}</p>
          <div className="icon">
            <button>
              <FaRegEye />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
