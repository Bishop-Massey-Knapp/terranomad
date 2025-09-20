import { useState, useMemo } from 'react'
import ProductItem from './ProductItem'
import Filter from './Filter'
import './ProductList.css'

function ProductList({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))]
    return uniqueCategories.sort()
  }, [products])

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products
    }
    return products.filter(product => product.category === selectedCategory)
  }, [products, selectedCategory])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Our Adventure Gear</h2>
      <div className="product-content">
        <div className="products-main">
          <div className="product-count">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'All' && (
              <span className="category-indicator"> in "{selectedCategory}"</span>
            )}
          </div>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductItem 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </div>
        <aside className="filter-sidebar">
          <Filter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </aside>
      </div>
    </div>
  )
}

export default ProductList
