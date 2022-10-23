import React from 'react'
import ProductGrid from '../components/ProductComponents/ProductGrid'
import { dummyData2 } from '../helper/heroData'

const ProductListingPage = () => {
    const data = [...dummyData2, ...dummyData2]
    return (
        <div>
            <ProductGrid rows={4} data={data} text="Browse All Products" />
        </div>
    )
}

export default ProductListingPage