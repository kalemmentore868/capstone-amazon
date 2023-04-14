import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/category-section.css"
import { useFetchAllCategories } from "../../helper/UsefulFuntions";

const CategorySection = () => {

    const { isLoading, apiError, apiData } = useFetchAllCategories(
        "GET",
        `${process.env.REACT_APP_API_ENDPOINT}/categories`,
        {}
    );
    return (
        <Container className="my-5">
            <h2 className="curly mb-5">Browse Our Categories</h2>
            <Row className="mb-3">
                {apiData.slice(0, 3).map((category) => {
                    return (
                        <Col md={4} className="mb-3" key={category.id}>
                            <Card className="green-bg white-text curly " >
                                <Card.Img variant="top" className="card-img" src={category.thumbnail} />
                                <Card.Body>
                                    <Card.Title className="text-center hover">{category.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}


            </Row>
            <div className="d-flex justify-content-end">
                <Link to="/categories">
                    <Button variant="success" className="ms-auto p-2 green-bg">See All Categories</Button>
                </Link>

            </div>

        </Container>
    );
};

export default CategorySection;