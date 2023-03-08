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
                        <Card.Img variant="top" className="card-img" src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Vegetables</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8RnJ1aXRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Fruits</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="green-bg white-text curly">
                        <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1630356090105-808ba2fe97f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title className="text-center hover">Dairy Products</Card.Title>
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