import React, { useEffect, useState } from 'react'
import { items } from './Data'
import { useParams } from 'react-router-dom'
import Products from './Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productdetail = ({ cart, setCart }) => {
  const { id } = useParams()

  const [products, setProducts] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterproduct = items.filter((products) => products.id == id)
    setProducts(filterproduct[0])

    const relatedProducts = items.filter(
      (pcat) => pcat.category === products.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, products.category])

  // const Products = ({ items, cart, setCart }) => {

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ", cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='container con '>
        <div className='img'>
          <img src={products.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">{products.description}</p>
          <button className="btn btn-primary mx-3" >{products.price}{" "}₹</button>
          <button
            onClick={() => addToCart(products.id, products.price, products.title, products.description, products.imgSrc)}
            className="btn btn-warning">Add To Cart</button>
        </div>

      </div>
      <h1 className='taxt-center'>Related Products</h1>
      <Products cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  )
}

export default Productdetail