import React from 'react'
import Banner from '../components/Banner'
import About from '../components/HomePageComponents/About'
import BestSellerSection from '../components/HomePageComponents/BestSellerSection'
import CategorySection from '../components/HomePageComponents/CategorySection'
import Products from '../components/HomePageComponents/DisplayProducts'
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