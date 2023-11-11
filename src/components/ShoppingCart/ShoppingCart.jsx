import React from 'react';
import './ShoppingCart.css'
const ShoppingCart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0 ; 
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity+ product.quantity;
    }
    const totalTax = totalPrice*7/100;
    const total = totalPrice + totalShipping + totalTax;
    return (
        <div>
             <div className='card-container'>
                <h3>Order Summary</h3>
                <p>Selected items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Grand Total: ${total.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default ShoppingCart;