import React from 'react'
import Grid from './Grid'
import { dummyData2 } from '../helper/heroData'

const BestSellerSection = () => {
    return (
        <div>
            <Grid rows={2} data={dummyData2} text="Browse Best Sellers" />
        </div>
    )
}

export default BestSellerSection