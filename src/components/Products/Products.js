import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const { name, seller, price, stock, img, ratings } = props.product;
    const allProduct = props.product;
    const buyNowEventHandler = props.buyNowEventHandler;
    const wrappingFunction = () => {
        buyNowEventHandler(allProduct);
    }
    return (
        <div className='product-info2'>
            <img src={img} alt="" />
            <div className='info'>
                <h3>Name: {name}</h3>
                <div className="more-info">
                    <p>Company: {seller}</p>
                    <p>Price: {price}</p>
                    <p>Stock: {stock}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
            <button className='btn-1' onClick={wrappingFunction}>Buy Now<FontAwesomeIcon icon={faShoppingCart} className="awesome-icon"></FontAwesomeIcon></button>
        </div>
    );
};

export default Products;