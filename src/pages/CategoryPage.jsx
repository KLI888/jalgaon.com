import React from 'react'
import Filtercategory from '../components/Filtercategory/Filtercategory'
import Categorysection from '../components/Categorysection/Categorysection'

function CategoryPage() {
  return (
    <div className="main_section">
      <Filtercategory />
      <Categorysection />
    </div>
  )
}

export default CategoryPage
