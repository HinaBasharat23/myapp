import React from 'react'
import data from '../data'
import {Link,useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/cartSlice'
const Product = () => { 
  const dispatch = useDispatch
  const addcart = (x)=>{
    dispatch(add(x));
  }
  const {id} = useParams();
  return (
    <div className='container'>
    <div className='row'>
      {
      data.map((a) => {
          return (
            <div className='col-md-3 mt-4'> 
              <div className='card image'>
                <Link to={`/product/${a.id}`} ><img className='card-img-top pic pro ' src={a.image} alt={a.name} style={{height:'250px'}} /></Link>
                <div className='card-body'>
                  <h5 className='card-title'>{a.tittle.slice(0,15)}....</h5>
                  <p className='card-text'>{a.description.slice(0,50)}...</p>
                  <p className='card-text'>Price: {a.price}</p>
                  <button type="button" class="btn btn-secondary" onClick={()=>addcart(a)}>Add to cart</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Product
