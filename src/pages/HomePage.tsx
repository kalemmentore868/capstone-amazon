import React from 'react'
import BestSellerSection from '../components/HomePageComponents/BestSellerSection'
import CategorySection from '../components/HomePageComponents/CategorySection'
import Hero from '../components/HomePageComponents/Hero'

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