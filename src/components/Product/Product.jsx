import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    // console.log(props.product);
    const handlarAddToCart=props.handlarAddToCart;
    // onClick={()=>handlarAddToCart()}

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-data'>
                <span className='font-big'>{name}</span><br />
                  <span className='font-medium'>Price: $ {price}</span><br /><br />
                  <span className='font-small'>Manufacturer: {seller}</span><br />
                  <span className='font-small'>Rating: {ratings}</span>
            </div>
            <button onClick={()=>handlarAddToCart(props.product)}
             className='shopping-card-btn'>
                Add to Cart 
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    );
};

export default Product;