import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const total = cart.reduce((previous, product) => previous + product.price, 0);
    const shipping = cart.reduce((previous, product) => previous + product.shipping, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    // const shipping = total > 15 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + tax + shipping;
    return (
        <div className='cart'>

            <h2>Order Summary:</h2>
            <h4>Items Ordered: {totalQuantity}</h4>
            <h5>total price: $ {total.toFixed(2)}</h5>
            <p>Shipping: $ {shipping.toFixed(2)}</p>
            <p>tax: $ {tax.toFixed(2)}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;