import { Col, Row } from "react-bootstrap";
import { useCreateProduct } from "../../helper/hooks";
import ProductForm from "./ProductForm";

const CreateProduct = () => {
    const { handleCreate } = useCreateProduct();
    return (
        <Row>
            <Col xs={12}>
                <ProductForm onSubmit={handleCreate} />
            </Col>
        </Row>
    );
};

export default CreateProduct;