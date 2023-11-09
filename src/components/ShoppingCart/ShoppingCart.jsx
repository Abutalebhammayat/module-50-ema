import React from 'react';

const ShoppingCart = ({cart}) => {
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
             <div className='card-container'>
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: </p>
                <p>Tax: </p>
                <h6>Grand Total: </h6>
            </div>
        </div>
    );
};

export default ShoppingCart;