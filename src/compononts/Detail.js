import React from 'react'
import{useParams} from 'react-router-dom'
import data from '../data';
const Detail = () => {
    const {id}= useParams();
    const result = data.find((x)=>x.id == id)
  return (
    <div className='container'>
    <div className='row'>
      <h1 className='text-center fs-1 fw-bold my-5'>Product Detail Page</h1>
    <div className='col-lg-6'>
    <img src={result.image} className="img-thumbnail" alt=''/>
    </div>
    <div className='col-lg-6' >
    <h1>{result.name} </h1>
    <p><strong>Price:</strong>${result.price} </p>
    <p><strong>Description</strong> {result.description}</p>
    </div>
    </div>
    </div>
  )
}

export default Detail
