import React from 'react'
import Banner from '../components/Banner'
import BestSellerSection from '../components/HomePageComponents/BestSellerSection'
import CategorySection from '../components/HomePageComponents/CategorySection'
import Hero from '../components/HomePageComponents/Hero'
import NewProducts from '../components/HomePageComponents/NewProducts'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Banner />
            <NewProducts />
            <CategorySection />
            <BestSellerSection />
        </>
    )
}

export default HomePage