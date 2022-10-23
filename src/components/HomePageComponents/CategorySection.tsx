import React from 'react'
import Grid from '../CategoryComponents/Grid'
import { dummyData } from "../../helper/heroData"

const CategorySection = () => {
    return (
        <div>
            <Grid rows={2} text="Browse our categories" data={dummyData} />
        </div>
    )
}

export default CategorySection