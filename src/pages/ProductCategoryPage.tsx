import React from 'react'
import Grid from '../components/Grid'
import { dummyData } from '../helper/heroData'

const ProductCategoryPage = () => {

    const data = [...dummyData, ...dummyData]
    return (
        <div>
            <Grid rows={4} data={data} text="Browse All Categories" />
        </div>
    )

}

export default ProductCategoryPage