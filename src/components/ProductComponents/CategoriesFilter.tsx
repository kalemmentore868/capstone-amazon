import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../../assets/css/CategoriesFilter.css';

const CategoriesFilter = () => {
    return (
        <div className="categories-filter mt-5">
            <h3>Categories</h3>
            <div className="categories-list">
                <ListGroup className="cat-list">
                    <ListGroup.Item className="category-item">Burgers</ListGroup.Item>
                    <ListGroup.Item className="category-item">Cold drinks</ListGroup.Item>
                    <ListGroup.Item className="category-item">Pasta</ListGroup.Item>
                    <ListGroup.Item className="category-item">Pizza</ListGroup.Item>
                    <ListGroup.Item className="category-item">Uncategorized</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default CategoriesFilter;
