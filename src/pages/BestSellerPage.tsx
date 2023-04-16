import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BestSellerContainer from '../components/BestSellerContainer'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useBestSellers } from '../helper/hooks'

const BestSellerPage = () => {

    const getBestSellers = useBestSellers()
    const bestSellers = getBestSellers.data ?? [];
    const filteredList = bestSellers.filter(product => product.is_best_seller === true)


    return <BestSellerContainer isLoading={getBestSellers.isLoading} bestSellers={filteredList} />

}

export default BestSellerPage