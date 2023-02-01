import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.carts;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const productPrice of cart) {
        quantity = quantity + productPrice.quantity;
        total = total + (productPrice.price * productPrice.quantity);
        shipping = shipping + productPrice.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart-calculation'>
            <h1>Cart Calculation</h1>
            <p>Cart Items Lists: {quantity}</p>
            <p>Product Price: ${total}</p>
            <p>Total Shopping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h2>Grand Total: {grandTotal}</h2>
        </div>
    );
};

export default Cart;