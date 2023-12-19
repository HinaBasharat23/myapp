import React, { useState } from 'react'
import data from '../data'

const Search = () => {
    const [search, setSearch]= useState('')
    console.log(search)
  return (
    <div className='container'>
      <input type='text' placeholder='Search Product' onChange={(e) =>setSearch(e.target.value)}className='my-3 w-50' />
      <div className='row'>
      {
        data.filter((x)=>{
          if(search == ``){
            return x
          } else if(x.tittle.toLowerCase().includes(search.toLowerCase())){
            return x
          }
        }).map((x)=>{
          return(
            <div className='col-md-3 mt-4'>
              <div className='card'>
               <img className='card-img-top' src={x.image} alt={x.name} style={{height:'250px'}} />
                <div className='card-body'>
                  <h5 className='card-title'>{x.tittle.slice(0,15)}...</h5>
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

export default Search
