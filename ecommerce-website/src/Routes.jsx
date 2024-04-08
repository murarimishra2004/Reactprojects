import React,{useState}from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Contact from './components/Contact';
 

export default function AppRoutes() {
    const [cart,setcart]=useState([])
    
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>} />
      <Route path='/shop' element={<Shop cart={cart} setcart={setcart}/>} />  
      <Route path='/contact' element={<Contact/>}   />  
    </Routes>
  );
}
