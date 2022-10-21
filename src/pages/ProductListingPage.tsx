import React from 'react'
import Grid from '../components/Grid'
import { dummyData2 } from '../helper/heroData'

const ProductListingPage = () => {
    const data = [...dummyData2, ...dummyData2]
    return (
        <div>
            <Grid rows={4} data={data} text="Browse All Products" />
        </div>
    )
}

export default ProductListingPage