import React, { useEffect, useState } from 'react';
import { addToDb, loadData } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const buyNowEventHandler = (product) => {
        let newCart = [];
        let exists = cart.find(previousProduct => previousProduct.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            let rest = cart.filter(previousProduct => previousProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(() => {
        const getDataFromLocalStorage = loadData();
        let storedData = [];
        for (const productId in getDataFromLocalStorage) {
            let addedProductInLocalStorage = products.find(product => product.id === productId);
            if (addedProductInLocalStorage) {
                let quantity = getDataFromLocalStorage[productId];
                addedProductInLocalStorage.quantity = quantity;
                storedData.push(addedProductInLocalStorage);
            }
        }
        setCart(storedData);
    }, [products])
    return (
        <div>
            <div className="container">
                <div className="row-1">
                    <div className="col-1">
                        <div className="products-info">
                            {
                                products.map(product => <Products key={product.id} product={product} buyNowEventHandler={buyNowEventHandler}></Products>)
                            }
                        </div>
                    </div>
                    <div className="col-2">
                        <Cart carts={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;