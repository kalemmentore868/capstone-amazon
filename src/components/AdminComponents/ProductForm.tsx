import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCategories } from "../../helper/hooks";
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
            category_id: 58,
            rating: 0,
            is_best_seller: false,
            img_url: "",
            seller_id: 2,
            price: 0,
        }
    );

    const getCategories = useCategories()
    const categories = getCategories.data ?? [];



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
            <Form.Group >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    className="mb-3"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group >
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    name="price"
                    className="mb-3"
                    value={formData.price}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter product description"
                    name="description"
                    className="mb-3"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                    as="select"
                    name="category_id"
                    className="mb-3"
                    value={formData.category_id}
                    onChange={handleInputChange}
                >
                    {categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}


                </Form.Control>
            </Form.Group>

            <Form.Group >
                <Form.Check
                    type="checkbox"
                    label="Set as Bestseller"
                    name="is_best_seller"
                    checked={formData.is_best_seller}
                    className="mb-3"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group >
                <Form.Label>Product Image Url</Form.Label>
                <Form.Control type="text" className="mb-3" id="formImageUpload" value={formData.img_url} name="img_url" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ProductForm;