import React,{ useState }from "react";
import { FaShippingFast } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Homepro from "./Homeproduct";

export default function Navbar({shop,setshop}) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [search,setsearch]=useState("")
  // const searchlength =(search || [] ).length === 0
  // if(searchlength){
  //   alert("Please search Something")
  // }
  // else{
    
  // }
  const searchProduct = () => {
    const searchFilter = Homepro.filter((product) =>
      product.cat.toLowerCase().includes(search.toLowerCase())
    );
    setshop(searchFilter);
     
  };
  

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <FaShippingFast />
          </div>
          <div className="info">
            <p>Free Shipping when shopping upto $1000</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" />
          </div>
          <div className="serach_box">
            <input type="text" value={search} placeholder="Search" onChange={(e) => setsearch(e.target.value)} />
            <button onClick={()=> searchProduct()}>
              <CiSearch />
            </button>
          </div>
          {isAuthenticated ? (
            //logout button
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            //login button
            <div className="user">
              <div className="icon">
                <MdLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="user_profile">
            {isAuthenticated ? (
              <>
                <div className="icon">
                  <FaUser />
                </div>
                <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </div>

              </>
            ) : (
              <>
                <div className="icon">
                  <FaUser />
                </div>
                <div className="info">
                  <p>Please Login</p>
                </div>
              </>
            )}
          </div>
          <div className="nav">
            <ul>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/shop' className="link">Shop</Link></li>
                <li><Link to='/cart' className="link">Cart</Link></li>
                <li><Link to='/about' className="link">About</Link></li>
                <li><Link to='/contact' className="link">Contact</Link></li>

            </ul>

          </div>
          <div className="offer">
            <p>Flat 10% Over All Iphone</p>
          </div>
        </div>
      </div>
    </>
  );
}
