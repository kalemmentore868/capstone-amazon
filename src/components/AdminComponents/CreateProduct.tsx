import { Col, Row } from "react-bootstrap";
import ProductForm from "./ProductForm";

const CreateProduct = () => {
    // Implementation of the ProductForm component from the previous answer goes here
    return (
        <Row>
            <Col xs={12}>
                <ProductForm onSubmit={(data: any) => console.log(data)} />
            </Col>
        </Row>
    );
};

export default CreateProduct;