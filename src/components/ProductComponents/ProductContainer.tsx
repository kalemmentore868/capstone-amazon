import React from 'react'
import { useProducts } from '../../helper/hooks';
import { GridLoader } from "react-spinners"
import ProductCard3 from '../ProductCard3';
import { Col } from 'react-bootstrap';
import { CSSProperties } from 'styled-components';



const ProductContainer = () => {


    const getProducts = useProducts()
    const products = getProducts.data ?? [];

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    if (getProducts.isLoading) {
        return (
            <Col xs={12} md={8} className="d-flex align-items-center justify-content-center vh-100">
                <GridLoader color="#60be74"

                    cssOverride={override}
                    size={80} />
            </Col>
        )
    }

    return (
        <Col xs={12} md={8}>
            {products.map(data => <ProductCard3 key={data.id} product={data} />)}
        </Col>
    )
}

export default ProductContainer