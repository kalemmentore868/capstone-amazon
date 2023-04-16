import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GridLoader } from 'react-spinners';
import { CSSProperties } from 'styled-components';
import '../assets/css/categoryPage.css';
import Loader from '../components/Loader';
import { useCategories } from '../helper/hooks';

const CategoryPage = () => {

    const getCategories = useCategories()
    const categories = getCategories.data ?? [];



    if (getCategories.isLoading) {
        return <Loader />
    }

    return (
        <div className="category-page">
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center'>Categories</h1>
                    </Col>
                </Row>
                <Row>
                    {categories.map((category) => {
                        return (
                            <Col md={4} key={category.id}>
                                <div className="category-card">
                                    <img src={category.thumbnail} alt="category image" />
                                    <h2 className="text-center mt-2">{category.title}</h2>
                                    <p className="text-left mt-2">{category.description}</p>
                                </div>
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </div>
    );
};

export default CategoryPage;
