import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from './Components/Nav';
import Cart from './Components/Cart';
import Axios from "axios";
import Card from "./Components/Card";

import Det from './Components/Det';
import Footer from './Components/Footer';
import Hoome from './Components/Hoome';


const App = () => {
  const [state, setState] = useState([]);
  const[cart,setCart]=useState([]);

  
  useEffect(()=>{
    Axios.get("https://fakestoreapi.com/products").then((res)=>{
        // console.log(res.data)
        setState(res.data)

    })
},[]);

  const Add=(info)=>{
    let obj=cart.filter((itm)=>itm.id==info.id);
    // console.log(obj);

    if(obj.length==0){
      setCart([...cart,{...info,"qty":1}])
    }
    else if(obj.length!==0){
      inc(info.id)
    }
    alert("Item Added into Cart Successfully")
};

function inc(id){
  let obj=cart.map((itm)=>{
    if(itm.id==id){
      itm.qty=itm.qty+1
    }
  
    return itm
  })
  setCart(obj)

};

const dec=(id)=>{
  cart.map((itm)=>{
    if(itm.id==id && itm.qty>1){
      itm.qty=itm.qty-1
    }
    return itm
  })
  setCart([...cart])

}

const del=(id)=>{
  let obj=cart.filter((itm)=>itm.id!==id);
  setCart(obj);


}


  return (
    <BrowserRouter>
      <Nav data={cart}/>
      <Hoome/>
    <Routes>
      <Route path="/" element={
        
        <div>
        <Card data={state} fun={Add} />
        </div>
        
      }/>
      <Route path="/cart" element={<Cart data={cart} inc={inc} dec={dec} del={del}/>}/>
      <Route  path="/details/:id" element={<Det />} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;