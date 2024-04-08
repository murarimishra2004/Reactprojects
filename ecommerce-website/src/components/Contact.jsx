import React, { useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Foooter from "./Foooter";
export default function Contact() {
    const [user , setuser]=useState({
        Name:"",
        Email:"",
        Subject:"",
        Message:""
    })
    let values,names
    const data=(e)=>{
        values= e.target.value
        names= e.target.name
        setuser({...user , [names]: values})
    }

    const send= async (e)=>{
        const {Name , Email , Subject , Message} = user
        e.preventDefault()
        const option ={
            method:"POST",
            headers:{
                'Content-Type': 'aplication/json'
            },
            body:JSON.stringify({
                Name , Email , Subject , Message
            })
        }
        const send= await fetch('https://react-ecommerce-contact-8e8f1-default-rtdb.firebaseio.com/Message.json' , option)
        if(send){
            alert("Message Sent !")
        }
        else{
            alert("Error Ocuured Message Sent Failed")
        }
    }






  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="conatiner">
          <div className="form">
            <h2>#Conatact US</h2>
            <form method="POST">
              <div className="contactbox">
                <div className="label">
                    <h4>Name</h4>
                </div>
                <div className="input">
                    <input type="text" placeholder="Name" value={user.Name} name="Name" onChange={data}></input>
                </div>
              </div>
              <div className="contactbox">
                <div className="label">
                    <h4>E-mail</h4>
                </div>
                <div className="input">
                    <input type="email" placeholder="E-mail" value={user.Email} name="Email" onChange={data}></input>
                </div>
              </div>
              <div className="contactbox">
                <div className="label">
                    <h4>Subject</h4>
                </div>
                <div className="input">
                    <input type="text" placeholder="Subject" value={user.Subject} name="Subject" onChange={data}></input>
                </div>
              </div>
              <div className="contactbox">
                <div className="label">
                    <h4>Message</h4>
                </div>
                <div className="input">
                     <textarea placeholder="Message !"  value={user.Message} name="Message" onChange={data} ></textarea>
                </div>
              </div>
              <button type="sublit" onClick={send}>Send</button>
            </form>
          </div>
        </div>
      </div>

      <Foooter />
    </>
  );
}
