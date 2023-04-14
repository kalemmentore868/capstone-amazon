import React, { useState } from 'react';
import { FormGroup, FormLabel, Form } from 'react-bootstrap';
import '../../assets/css/PriceFilter.css';


interface Props {
    onPriceChange: (priceRange: number) => void;
    price: number
}

const PriceFilter: React.FC<Props> = ({ onPriceChange, price }) => {


    return (
        <div className="price-filter mt-5">
            <h3>Filter by Price</h3>
            <FormGroup>

                <Form.Range
                    value={price}
                    onChange={(e) => onPriceChange(parseInt(e.target.value))}
                    min={0}
                    max={200}
                    step={5}
                    className="range"
                />
            </FormGroup>

            <FormLabel>Price range: $0 - ${price}</FormLabel>
        </div>
    );
};

export default PriceFilter;
