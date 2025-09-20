import { useState } from 'react'
import './Filter.css'

function Filter({ categories, selectedCategory, onCategoryChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="filter-container">
      <div className="filter-header" onClick={toggleCollapse}>
        <h3 className="filter-title">Filter by Category</h3>
        <button className={`collapse-btn ${isCollapsed ? 'collapsed' : ''}`}>
          <span className="chevron"></span>
        </button>
      </div>
      <div className={`filter-options ${isCollapsed ? 'collapsed' : ''}`}>
        <button 
          className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => onCategoryChange('All')}
        >
          All Products
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
