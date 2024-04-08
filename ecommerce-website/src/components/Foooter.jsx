import React from 'react'
import { MdSavings } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import "./Footer.css";

export default function Foooter() {
  return (
    <>
    <div className="headercontainer">
        <div className="leftbox">
            <div className="leftdetails">
                <div className="insideleftdetails">
                    <div className="icon">
                    <MdSavings />
                    </div>
                    <div className="aftericondetails">
                        <h2>Great saving</h2>
                        <p>Yes you can save no worries</p>
                    </div>
                </div>
                <div className="insideleftdetails">
                    <div className="icon">
                    <TbTruckDelivery />
                    </div>
                    <div className="aftericondetails">
                        <h2>Free Delivery</h2>
                        <p>yes we offer you this service</p>
                    </div>
                </div>
                <div className="insideleftdetails">
                    <div className="icon">
                    <BiSupport />

                    </div>
                    <div className="aftericondetails">
                        <h2>24*7 Support </h2>
                        <p>Offer you the best service</p>
                    </div>
                </div>
                <div className="insideleftdetails">
                    <div className="icon">
                    <FaMoneyCheck />

                    </div>
                    <div className="aftericondetails">
                        <h2>Money back</h2>
                        <p>Assure you the services</p>
                    </div>
                </div>
                
            </div>

        </div>
        <div className="rightbox">
            <div className="logodetails">
                <div className="logo">
                    <img src="image/logo.webp" alt="Logo" />

                </div>
                <p>Debitis sequi deserunt non fugit facilis, fugiat molestias? Fugit, doloruamet!</p>
            </div>
            <div className="footerdetails">
                <div className="footerdetailsbox">
                    <h3>Your acoount</h3>
                    <h4>About us</h4>
                    <h4>Account</h4>
                    <h4>Payment</h4>
                    <h4>Sale</h4>
                </div>
                <div className="footerdetailsbox">
                    <h3>Products</h3>
                    <h4>Delivery</h4>
                    <h4>Track Order</h4>
                    <h4>New Product</h4>
                    <h4>Old Product</h4>
                </div>
                <div className="footerdetailsbox">
                    <h3>Contact us</h3>
                    <h4>123, delhi , sec-3 India</h4>
 
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
