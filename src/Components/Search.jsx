import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { items } from './Data';
import Products from './Products';

const Search = ({cart, setCart}) => {

  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();
    
  }, [term])
  

  return (
    <Products cart={cart} setCart={setCart} items={filterData} />
  )
}

export default Search