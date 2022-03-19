import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Allproducts.css'

const Allproducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div>
            <h1> All Products</h1>
            <div className="row container">
                {
                    products.map(product => <SingleProduct
                        key={product.id}
                        product={product}
                        setCartCount={props.setCartCount}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Allproducts;