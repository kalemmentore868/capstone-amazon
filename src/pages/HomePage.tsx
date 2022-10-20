import React from 'react'
import BestSellerSection from '../components/BestSellerSection'
import CategorySection from '../components/CategorySection'
import Hero from '../components/Hero'

const HomePage = () => {
    return (
        <>
            <Hero />
            <CategorySection />
            <BestSellerSection />
        </>
    )
}

export default HomePage