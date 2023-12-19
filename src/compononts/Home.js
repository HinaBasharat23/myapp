import React from 'react'
import data from '../data'

const Home = () => {
  
  return (
    <div>
     <div id="carouselExampleInterval" class="carousel slide slider" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/react pics/car5.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/react pics/pic3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/react pics/car2.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="/react pics/car3.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/react pics/car4.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
<div>
  <div className="container">
    <div className="row">
    <h3 className='mt-5 fs-1'>TRENDING</h3>
    <hr></hr>
      {
        data.map((x)=>{
          return(
            
            <div className='col-md-3 mt-5'>
              
            <div className='card image'>
              <img className='card-img-top snap' src={x.image} alt={x.name} style={{height:'250px'}}/>
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
</div>
    </div>
    
  )
}

export default Home;

