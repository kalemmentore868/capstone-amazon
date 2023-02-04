import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row'
import "../assets/css/productDetails.css"
import ProductImages from '../components/ProductDescriptionComponents/ProductImages'
import ProductInfo from '../components/ProductDescriptionComponents/ProductInfo'
import RelatedProducts from '../components/ProductDescriptionComponents/RelatedProducts'
import { Product } from '../components/HomePageComponents/DisplayProducts'

const ProductDescriptionPage = () => {


    const [product, setProduct] = useState<Product>({
        title: "",
        description: "",
        price: 0,
        img_url: "",
        _id: ""
    });

    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:5000/api/products/${id}`);
            const data = await res.json();
            setProduct(data.data);
        };

        fetchProduct();
    }, []);


    return (
        <Container className="mb-5 py-5">
            <Col lg={8} className="border p-3 main-section bg-white vh-100 ">
                <Row className="hedding m-0 pl-3 pt-0 pb-3 mt-5 ">
                    {product.title}
                </Row>
                <Row className="m-0">
                    <ProductImages img={product.img_url} />
                    <ProductInfo product={product} />
                </Row>
                {/* <RelatedProducts /> */}
            </Col>
        </Container>
    )
}

export default ProductDescriptionPage