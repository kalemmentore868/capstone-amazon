import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ProductType } from "../../helper/types";

interface ProductFormProps {
    onSubmit: (data: ProductType) => void;
    product?: ProductType;
}

const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
    const [formData, setFormData] = useState<ProductType>(
        product || {
            id: 0,
            title: "",
            description: "",
            category_id: 0,
            rating: 0,
            is_best_seller: false,
            img_url: "",
            seller_id: 2,
            price: 0,
        }
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter product description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formCategory">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                    as="select"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                >
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                    <option value={3}>Category 3</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBestseller">
                <Form.Check
                    type="checkbox"
                    label="Set as Bestseller"
                    name="is_best_seller"
                    checked={formData.is_best_seller}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formImage">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" id="formImageUpload" name="img_url" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ProductForm;