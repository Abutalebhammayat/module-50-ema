import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])

    const handlarAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
           <ShoppingCart cart={cart}></ShoppingCart>
        </div>
    );
};

export default Shop;