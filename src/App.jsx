import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Productdetail from './Components/Productdetail'
import Search from './Components/Search'
import Cart from './Components/Cart'
import Login from './Components/Login'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { items } from './Components/Data'
import Register from './Components/Register'
import Home from './Components/Home'
import Hb from './Components/Hb'





const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData}/>
    <Routes> 
      <Route path='/' element={<Products cart={cart} setCart={setCart} items={data} />}/>
      <Route path='/product/:id' element={<Productdetail cart={cart} setCart={setCart}/>}/>
      <Route path='/search/:term' element={<Search cart={cart} setCart={setCart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/hb' element={<Hb cart={cart} setCart={setCart} items={data} />} />
    </Routes>
    </Router>
      </>
  )
}

export default App