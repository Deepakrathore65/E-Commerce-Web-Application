import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
import { items } from './Data'
import { useState,  } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'

import { FaCartArrowDown } from "react-icons/fa";


const Navbar = ({setData, cart}) => {
  const location = useLocation()
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")

    const filterByCategory = (category)=>{
        const element = items.filter((product)=>product.category === category)
       setData(element)
    }

       const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
    }
  return (
    <>
    <header className='sticky-top'>
        <div className='nav-bar'>
            <Link to={'/'} className="brand">E-Cart</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>
            <Link to={'/cart'} className="cart">
              <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
        </div>
        {
          location.pathname == '/' && (
        <div className='nav-bar-wrapper'>
           <div className='items filter'>Filter</div>
           <div onClick={()=>setData(items)} className='items'>All</div>
           <div onClick={()=>filterByCategory('mobiles')} className='items'>Mobiles</div>
           <div onClick={()=>filterByCategory('laptops')} className='items'>Laptops</div>
           <div onClick={()=>filterByCategory('tablets')} className='items'>Tablets</div>
           <Link to={'/login'} className='btn btn-warning'>Login</Link>
        </div>
        )
      }
    </header>
    </>
  )
}

export default Navbar