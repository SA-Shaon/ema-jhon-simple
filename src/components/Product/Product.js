import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p><small>by: {seller} </small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon
                </small></p>
                <button
                    className='btn-regular'
                    onClick={() => props.handleAddToCart(props.product)}
                >{element} add to cart</button>
            
            </div>
        </div>
    );
};

export default Product;