import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminProductContainer from '../components/AdminComponents/AdminProductConatiner';

const AdminPage = () => {
    const [showProducts, setShowProducts] = useState(false)
    return (
        <Container style={{ minHeight: "100vh" }} className="py-4">
            <Row className="mt-5 mb-3">
                <Col xs={12} className="text-center">
                    <h1>Admin Dashboard</h1>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col xs={12} className="text-center">
                    <Link to="/createproduct" className="me-2" >
                        Create Product
                    </Link>
                    <Button variant="secondary" onClick={() => setShowProducts(!showProducts)}>
                        {showProducts ? "Hide Products" : "Display Products"}
                    </Button>
                </Col>
            </Row>

            {showProducts && <AdminProductContainer />}



        </Container>
    );
};


export default AdminPage