import React from 'react'
import ProductGrid from '../ProductComponents/ProductGrid'
import { dummyData2 } from '../../helper/heroData'

const BestSellerSection = () => {

    return (
        <div>
            <ProductGrid rows={1} data={dummyData2} text="Browse Best Sellers" />
        </div>
    )
}

export default BestSellerSection