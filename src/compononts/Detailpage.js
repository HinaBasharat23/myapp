import React from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
const Detailpage =()=>{
    const {id}=useParams
    const[detail, setDetail]=useState({})
   
    fetch(`https://fakestoreapi.com/products/${id}`).then((response)=>response.json).then((result)=>setDetail(result))
    return(
     <div className='container'>
    <div className='row'>
    <h1 className='text-center fs-1 fw-bold my-5'> Detail Page of Product</h1>
    <hr></hr>
    <div className='col-lg-6'>
    <img src={detail.img} className='img-float' alt= ''/>
    </div>
    <div className='col-lg-6'>
    <h1>{detail.name} </h1>
    <p><strong>Price:</strong>${detail.price} </p>
    <p><strong>Description</strong> {detail.description}</p>
    </div>
    </div>
     </div>   
    )
}
export default Detailpage 