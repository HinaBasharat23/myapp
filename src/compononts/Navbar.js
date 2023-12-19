import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useSelector} from 'react-redux'
const Navbar = () => {
 const getdata = useSelector ((state)=>state.cartReducer.carts);
 console.log(getdata)
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
  <div class="logo">
        <img src="/react pics/swoosh-logo-black.jpeg" alt="image" width="80px" height="80px"/>
    </div>
    {/* <Link class="navbar-brand" to="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/men">Men</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/women">Women</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/kids">Kids</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/online">Online</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/shoppingcart">Shoppingcart</Link>
        </li>
      </ul>
      
  </div>
  <div class="search-bar mx-5">
        <div class="bar">
            <input type="text" class="text" placeholder="search here"  />
        </div>
    </div>
    <Badge badgeContent={getdata} color="primary">
      < ShoppingCartTwoToneIcon color="action" />
    </Badge>
  {/* <button className='btn btn-primary mx-2' onClick={()=>setIslogin(true)}>Login</button>
      <button className='btn btn-primary mx-2' onClick={()=>setIslogin(false)}>Logout</button> */}
    </div>
</nav>
    </div>
  )
}

export default Navbar;
