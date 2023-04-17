import React, { CSSProperties } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../helper/hooks";
import { ProductType } from "../../helper/types";

interface props {
    product: ProductType
}

const AdminProductCard: React.FC<props> = ({ product }) => {

    const { isLoading, handleDelete } = useDeleteProduct();

    const style: CSSProperties = {
        height: "200px",
        objectFit: "cover"
    }

    return (
        <Card>
            <Card.Img variant="top" style={style} src={product.img_url} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>
                    {isLoading ? "Deleting Product..." : " Delete"}
                </Button>
                <Link to={`/edit-product/${product.id}`} className="btn btn-primary ms-3">
                    Edit
                </Link>
            </Card.Body>
        </Card>
    );
};

export default AdminProductCard;