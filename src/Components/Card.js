import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'


const Card = (props) => {
    let prod=props.data
    // console.log(prod)
   
  return (
    <div className='cardCont'>
        {
            prod.map((itm)=>{
                return(
                    <div className='XCard'>
                        <div className='image'><img src={itm.image} alt="prod" /></div>
                        <div className='cont'>{itm.category}</div>
                        <div className='cont'>Rs. {itm.price}</div>
                        <div className='cont'>Rating: {itm.rating.rate}</div>
                        <section className='BtnItm'>
                            <Link to={`/details/${itm.id}`} >  details </Link>
                            <button onClick={()=>props.fun(itm)} className='button'>AddCart</button>
                        </section>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Card