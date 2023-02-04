import React from 'react'
import About from '../components/HomePageComponents/About'
import Products from '../components/HomePageComponents/DisplayProducts'
import Hero from '../components/HomePageComponents/Hero'

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Products />
        </>
    )
}

export default HomePage