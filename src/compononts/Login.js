import React from 'react'
import {Link,useState} from 'react'
const Login = () => {
  const [user,setUser]=useState(
    {
      name:'',
      email:'',
      password:'',
    }
  );

  console.log(user)
  return (
    <div className='container'>
      <div className='row'>
      <form className='w-50 m-auto form'>
        <h1 className='text-center fs-1 fw-bold'>Login Form</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input required type="text" class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({...user,name:e.target.value})} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input required type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e)=>setUser({...user,email:e.target.value})}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input required type="password" class="form-control" name='password' id="exampleInputPassword1"onChange={(e)=>setUser({...user,password:e.target.value})}/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-danger mx-3">Submit</button>
  <Link to='/register'><button type="register" class="btn btn-danger my-3">Register</button></Link>
</form>
      </div>
    </div>
  )
}

export default Login
