import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import "../App.css" ;
import { useNavigate } from "react-router-dom";



const Cart = (props) => {
  let prod=props.data;
  const navigate = useNavigate();
  

  const Redirect=()=>{
    navigate("/")
    
  }
  
  return (
    <div>
      {prod.length!==0?<div className="cart">
      {
        prod.map((itm)=>{
            return(
            
             
                <div className='cartItem'>
                
                    <div className='image'><img src={itm.image} alt="prod" /></div>
                    <div style={{"color":"grey",fontSize:"10px"}}>{itm.title}</div>
                    <div>Price:{Math.round( itm.price  *  itm.qty) }₹</div>
                    <div className='btnCont'> 
                      <button onClick={()=>props.dec(itm.id)} className='btn'>-</button>
                      {itm.qty} 
                      <button onClick={()=>props.inc(itm.id)} className='btn'>+</button>
                      <button onClick={()=>props.del(itm.id)} id='btn'>del</button>
                    </div>
                </div>
                
            )
        })
    }
      </div>:<section className='EmptyCart'><div  style={{"color":"blue",fontSize:"80px"}}><BsFillCartPlusFill/> </div>
      <div>Hey, it feels so light </div> <div style={{"marginLeft":"5px","color":"grey"}}>   There is nothing in your bag. Let's add some items!  </div>  
        <button id='WishList' onClick={Redirect}> AddItems  </button>
      </section>}
    </div>
    
  )
}

export default Cart