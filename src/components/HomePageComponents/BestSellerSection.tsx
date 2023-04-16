import React from 'react'
import ProductGrid from '../ProductComponents/ProductGrid'
import { dummyData2 } from '../../helper/heroData'
import { useBestSellers } from '../../helper/hooks'
import BestSellerContainer from '../BestSellerContainer'

const BestSellerSection = () => {

    const getBestSellers = useBestSellers()
    const bestSellers = getBestSellers.data?.slice(0, 3) ?? [];



    return <BestSellerContainer isLoading={getBestSellers.isLoading} bestSellers={bestSellers} />
}

export default BestSellerSection