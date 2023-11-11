import React from 'react';
import './ShoppingCart.css'
const ShoppingCart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const totalTax = totalPrice*7/100;
    const total = totalPrice + totalShipping + totalTax;
    return (
        <div>
             <div className='card-container'>
                <h3>Order Summary</h3>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Grand Total: ${total.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default ShoppingCart;