import React from 'react';

const ShimmerCard = () => (
    <div className="product-card shimmer-card">
        <div className="shimmer-image-container shimmer-bg"></div>
        
        <div className="product-details">
            <div className="shimmer-line short shimmer-bg"></div>
            <div className="shimmer-line medium shimmer-bg"></div>
            
            <div className="price-block">
                <div className="shimmer-line very-short shimmer-bg"></div>
            </div>

            <div className="button-container">
                <div className="shimmer-button shimmer-bg"></div>
                <div className="shimmer-button shimmer-bg"></div>
            </div>
        </div>
    </div>
);

export default ShimmerCard;