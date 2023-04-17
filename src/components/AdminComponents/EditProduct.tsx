import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../helper/hooks";
import ProductForm from "./ProductForm";

const EditProduct = () => {
    // Implementation of the ProductForm component with pre-filled data for editing goes here

    const { id } = useParams();

    const getProduct = useSingleProduct(Number(id))
    const product = getProduct.data ?? undefined

    return (
        <Row>
            <Col xs={12}>
                <ProductForm
                    product={{
                        id: 1,
                        title: product?.title || "no title",
                        description: product?.description,
                        category_id: product?.category_id || 60,
                        rating: product?.rating || 3,
                        is_best_seller: product?.is_best_seller || false,
                        img_url: product?.img_url || "https://example.com/product1.jpg",
                        seller_id: product?.seller_id || 1,
                        price: product?.price || 0,
                    }}
                    onSubmit={(data) => console.log(data)}
                />
            </Col>
        </Row>
    );
};

export default EditProduct