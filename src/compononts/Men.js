import React from 'react'
import men from '../men'
import { Link, useParams } from 'react-router-dom'

const Men = () => {
  const {id} = useParams
  return (
    <div className='container'>
    <div className='row'>
    {
       men.map((x)=>{
        return (
          <div className='col-md-3 mt-4'>
            <div className='card image'>
              <Link to={`/product/${x.id}`} ><img className='card-img-top post' src={x.image} alt={x.name} style={{height:'250px'}}/></Link>
              <div className='card-body'>
                <h5 className='card-title'>{x.tittle}</h5>
                <p className='card-text'>{x.description.slice(0,50)}...</p>
                <p className='card-text'>Price: {x.price}</p>
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

export default Men
