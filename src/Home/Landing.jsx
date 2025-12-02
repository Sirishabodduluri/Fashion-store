import './Landing.css';
import React, { useContext } from 'react';
import { ProductContext, CartContext } from '../StoreContext.jsx'; 
import ShimmerCard from '../ShimmerCard.jsx'; 

const ProductCard = ({ product }) => {
const { onAddToCart } = useContext(CartContext); 

const handleAddToCart = () => {
onAddToCart(product);
};

return (
<div className="product-card">
<div className="product-image-container">
<img src={product.images ? product.images[0] : 'https://via.placeholder.com/200x200?text=No+Image'} className="product-image" alt={product.title} />
</div>
<div className="product-details">
<p className="product-title">{product.title || "Sample Product Title"}</p>
<div className="price-block">
<span className="current-price">₹{product.price || '999'}</span>
<span className="discount-price">₹{(product.price * 1.5).toFixed(0) || '1499'}</span>
<span className="discount-percentage">40% off</span>
</div>
<div className="rating-block">
<span className="rating-stars">⭐ {product.rating || '4.0'}</span>
<span className="assured-tag">✅Assured</span>
</div>
<p className="extra-info">Buy 2 items, save extra 7%</p>
<div className="button-container">
<button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart ❤️</button>
<button className="buy-now-button">Buy Now</button>
</div>
</div>
</div>
);
};


const Landing = () => {
const { products, loading, error, totalItems } = useContext(ProductContext); 

if (error) {
return <div className="error">{error}</div>;
}

return (
<div className="product-grid-container">
<h2>Beauty And Grooming</h2>
<div className="product-grid">

{loading ? (
Array(totalItems).fill("").map((_, index) => (
<ShimmerCard key={index} />
))
) : (
products.map(product => (
<ProductCard key={product.id} product={product} /> 
))
)}
</div>
</div>
);
};

export default Landing;