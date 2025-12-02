import React, { useContext } from 'react';
import './Nav.css';
import { CartContext } from '../StoreContext';


const Nav = () => {
const { cart } = useContext(CartContext); 
const cartCount = cart.length; 

return (
<>
<div className="navbar-container">
<nav className="navbar">
<a className="brand-logo" href="#">
Women Fashion Store 👗
</a>

<div className="nav-group">
<div className="nav-links">
<a className="nav-link" href="#">
New Arrivals
</a>
<a className="nav-link sale" href="#">
🔥 Mega Sale
</a>
</div>
<a className="cart-icon-wrapper" href="#">
<svg 
xmlns="http://www.w3.org/2000/svg" 
className="cart-icon" 
fill="none" 
viewBox="0 0 24 24" 
stroke="currentColor" 
strokeWidth={2}
>
<path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
{cartCount > 0 && (
<span className="cart-badge">
{cartCount} 
</span>
)}
</a>
<button className="signin-button hidden-sm">
Sign In
</button>
</div>
</nav>
</div>
</>
);
};

export default Nav;