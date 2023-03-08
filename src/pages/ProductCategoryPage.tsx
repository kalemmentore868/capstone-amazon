import React from 'react'
import Grid from '../components/CategoryComponents/Grid'
import { dummyData2 } from '../helper/heroData'

const ProductCategoryPage = () => {

    const data = [...dummyData2, ...dummyData2]
    return (
        <div>
            <Grid rows={4} data={data} text="Browse All Categories" />
        </div>
    )

}

export default ProductCategoryPage