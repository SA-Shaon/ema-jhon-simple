import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const navigate = useNavigate();
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        navigate('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(products => <ReviewItem
                        handleRemove={handleRemove}
                        key={products.key}
                        products={products}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;