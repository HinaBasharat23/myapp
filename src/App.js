import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Fakeapi from './compononts/Fakeapi';
import Navbar from './compononts/Navbar';
import About from './compononts/Kids';
import Product from './compononts/Product';
import Detail from './compononts/Detail';
import Home from './compononts/Home';
import Detailpage from './compononts/Detailpage';
import Login from './compononts/Login';
import Protectedroute from './compononts/Protectedroute';
import Men from './compononts/Men';
import Women from './compononts/Women';
import Kids from './compononts/Kids';
import Mendetail from './compononts/Mendetail';
import Womendetail from './compononts/Womendetail';
import Search from './compononts/Search';
import Online from './compononts/pro';
import Register from './compononts/Register';
import Shoppingcart from './compononts/Shoppingcart';


function App() {
  // const [{islogged,setIslogin}]=useState(false)
  return(
   <div className="App" >
    <Navbar/>
    <Routes>
    {/* <Route element={<Protectedroute  islogged={islogged}/>}>  */}
    <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<Detail/>}></Route> 
      <Route path='/men' element={<Men/>}></Route> 
      <Route path='/men/:id' element={<Mendetail/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/women/:id' element={<Womendetail/>}></Route>
      <Route path='/kids' element={<Kids/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/online' element={<Online/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/shoppingcart' element={<Shoppingcart/>}></Route>
      {/* <Route path='/fakeapi' element={<Fakeapi/>}></Route>
      <Route path='/fakeapi/:id' element={<Detailpage/>}></Route> */}
    {/* </Route> */}
    </Routes>
   
    
   </div>
  );
}

export default App;
