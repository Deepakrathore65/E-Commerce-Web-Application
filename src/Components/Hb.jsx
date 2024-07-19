import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Hb =  ({ items, cart, setCart }) => {

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
            
            <div className="container my-5">
                <div className='row'>
                    {
                        items.map((products) => {
                            return (
                                <>

                                    <div className="col-lg-4 col-md-6 my-3 tect-center">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <Link to={`/product/${products.id}`}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center', alignItems: 'center'
                                                }} >
                                                <img src={products.imgSrc} class="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{products.title}</h5>
                                                <p className="card-text">{products.description}</p>
                                                <button className="btn btn-primary mx-3" >{products.price}{" "}₹</button>
                                                <button
                                                    onClick={() => addToCart(products.id, products.price, products.title, products.description, products.imgSrc)}
                                                    className="btn btn-warning">Add To Cart</button>
                                            </div>
                                        </div></div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            
        </>
    )
}


export default Hb