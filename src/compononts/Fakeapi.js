import React, {  useState } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Fakeapi = () => {
  // const {id} = useParams
  const [a , setA]=useState([])
  fetch('https://fakestoreapi.com/products').then((response)=>response.json).then((result)=>setA(result))
  // const getdata =async()=> {
  //   let data = await  axios.get("https://fakestoreapi.com/products").then((result)=>setA(result.data))
  // }
  // useEffect(()=>{
  //   getdata();
  // },[])
 
 
  return (
    <div className='container'> 
    <div className='row'>
      {a.map((x)=>{
      return(
        <div className='col-md-4'>
          <div className='card'style={{width:'18rem'}}>
           <Link to={`/fakeapi/${x.id}`} > <img src={x.image} className='card-img-top' alt='...'/></Link>
            <div className='card-body'>
              <h5 className='card-title'>{x.tittle.slice(0,20)}....</h5>
              <p className='card-text'>{x.description.slice(0,50)}....</p>
              <p className='card-text'>{x.price}</p>
              <a href="#" className='btn btn-primary'>Go somewhere</a>
            </div>
          </div>
        </div>
      )
}

)
      }
    </div>
    </div>
  )
}

export default Fakeapi;
