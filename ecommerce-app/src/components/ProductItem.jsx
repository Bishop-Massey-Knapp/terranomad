import { useState } from 'react'
import './ProductItem.css'

function ProductItem({ product }) {
  const [imageError, setImageError] = useState(false)
  
  const getImagePath = (imageName) => {
    if (!imageName) return null
    // Use public folder for direct access in Vite
    return `/products/${imageName}`
  }

  return (
    <div className="product-item">
      <div className="product-image-container">
        {!imageError && product.image ? (
          <img 
            src={getImagePath(product.image)} 
            alt={product.name}
            className="product-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="product-image-placeholder">
            <span className="placeholder-icon">📦</span>
            <span className="placeholder-text">Image Coming Soon</span>
          </div>
        )}
      </div>
      
      <div className="product-header">
        <h3 className="product-name">{product.name}</h3>
        <span className="product-category">{product.category}</span>
      </div>
      
      <div className="product-body">
        <p className="product-description">{product.description}</p>
      </div>
      
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem
