import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Det = () => {
let {id}=useParams()
let [data,setData]=useState({})
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setData(json))
},[id])

    return (
        <div className='DCard'>
        <div className='image'><img src={data.image} alt="prod" /></div>
          <div className='DCardItems'>
          <div className='cont'>{data.title}</div>
          <div className='cont'>Rs. {data.price}</div>
          <div className='cont' style={{"fontSize":"12px",color:"grey"}}>Rs. {data.description}</div>

        </div>
    
    </div>
  )
}

export default Det