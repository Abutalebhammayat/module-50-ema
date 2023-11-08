import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handlarAddToCart = (product) =>{
        console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handlarAddToCart={handlarAddToCart}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;