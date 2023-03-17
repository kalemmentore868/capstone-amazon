import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../assets/css/category-section.css"

const CategorySection = () => {
    return (
        <Container className="my-5">
            <h2 className="curly mb-5">Browse Our Categories</h2>
            <Row className="mb-3">
                <Col md={4} className="mb-3">
                    <Card className="green-bg white-text curly " >
                        <Card.Img variant="top" className="card-img" src="https://plus.unsplash.com/premium_photo-1672498193267-4f0e8c819bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZ3MlMjBmcmllZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Wings</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Burgers</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHdyYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Gyros</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Row>
                <Col md={4} className="mb-3">
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25hY2tzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Snacks</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1611038333075-2efd28705f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Meat</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} >
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5pbmclMjBzdXBwbGllc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Cleaning Supplies</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
            <div className="d-flex justify-content-end">
                <Button variant="success" className="ms-auto p-2 green-bg">See All Categories</Button>
            </div>

        </Container>
    );
};

export default CategorySection;