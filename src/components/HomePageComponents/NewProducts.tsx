import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../assets/css/newProducts.css"
import ProductCard2 from '../ProductCard2';
import { useCategories, useNewProducts } from '../../helper/hooks';
import { useSearchParams } from 'react-router-dom';
import Loader from '../Loader';


const NewProducts = () => {

    const [activeCat, setActiveCat] = useState("All")
    const [search, setSearch] = useSearchParams()

    const getNewProducts = useNewProducts()

    const products = getNewProducts.data ?? [];


    const categoryClicked = (categoryTitle: string, category_id: string) => {
        setActiveCat(categoryTitle)
        search.set("category_id", category_id)
        search.set("sort", "newest arrivals")
        setSearch(search, {
            replace: true
        })
    }



    const getCategories = useCategories()
    const categories = getCategories.data ?? [];


    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} md={6}>
                    <h2 className="curly big-font">New Products</h2>
                </Col>
                <Col xs={12} md={6} className="text-right rubiks-font hover text-muted mt-4">
                    <span onClick={() => categoryClicked("All", "")} className={activeCat === "All" ? "mb-4 me-4 active-cat" : "mb-4 me-4"} >All</span>
                    {categories.slice(0, 5).map((category) => {
                        return <span onClick={() => categoryClicked(category.title, `${category.id}`)} key={category.id} className={activeCat === category.title ? "mb-4 me-4 active-cat" : "mb-4 me-4"}>{category.title}</span>
                    })}
                </Col>
            </Row>
            <Row className="mt-4">

                {getNewProducts.isLoading ? (
                    <Loader size={20} />
                ) : (
                    <>
                        {products.slice(0, 3).map((product, index) => (
                            <Col key={index} xs={12} md={4} className="mb-4">
                                <Card>

                                    <ProductCard2 product={product} />

                                </Card>
                            </Col>
                        ))}
                    </>
                )}


            </Row>
        </Container>
    );
};

export default NewProducts;