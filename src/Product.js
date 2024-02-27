import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Axios.get("https://dummyjson.com/products")
            .then((result) => {
                console.log(result.data.products);
                setProducts(data.data.products)
            });
        // 
    })
    return (
        <div>
            {console.log(products)}
        </div>
    );
}

export default Product;
