import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
export const CartContext = createContext();

const useProductFetcher = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalItems, setTotalItems] = useState(10); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=3600');
                setProducts(response.data.products);
                setTotalItems(response.data.total); 
                setLoading(false);
            } catch (err) {
                setError('Error fetching data: ' + err.message);
                setLoading(false);
                setTotalItems(10); 
            }
        };
        fetchProducts();
    }, []);

    return { products, loading, error, totalItems };
};

const useCartLogic = () => {
    const [cart, setCart] = useState([]);

    const onAddToCart = (product) => {
        setCart(prevCart => [...prevCart, { ...product, cartId: Date.now() }]);
        alert(`${product.title} added to cart!`);
    };

    const onRemoveFromCart = (cartId) => {
        setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
    };

    return { cart, onAddToCart, onRemoveFromCart };
};


export const StoreProvider = ({ children }) => {
    const productData = useProductFetcher();
    const cartData = useCartLogic();

    return (
        <ProductContext.Provider value={productData}>
            <CartContext.Provider value={cartData}>
                {children}
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};