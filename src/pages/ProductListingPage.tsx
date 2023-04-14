import React, { useState } from 'react';
import { useFetchAllProducts } from '../helper/UsefulFuntions';
import { Row, Col, Container } from 'react-bootstrap';
import "../assets/css/productListing.css"
import CategoriesFilter from '../components/ProductComponents/CategoriesFilter';
import PriceFilter from '../components/ProductComponents/PriceFilter';
import { useWindowScroll, useWindowSize } from "react-use";
import { BiFilterAlt } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import SortProducts from '../components/ProductComponents/SortProducts';
import { Link } from 'react-router-dom';
import ProductContainer from '../components/ProductComponents/ProductContainer';



const ProductListing: React.FC = () => {
    const sortOptions = ["Default sorting", "popularity", "price- high to low", "price- low to high", "newest arrivals"]

    const [filters, setFilters] = useState({
        category: 'any',
        maxPrice: 200,
        sort: sortOptions[0],
    });

    const { width } = useWindowSize()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const { y } = useWindowScroll();


    if (y > 0 && filterIsOpen) setFilterIsOpen(false)

    const onSelectOption = (option: string) => {
        setFilters({ ...filters, sort: option })
    }

    const onSelectCategory = (category: string) => {
        setFilters({ ...filters, category })
    }

    const onPriceChange = (price: number) => {
        setFilters({ ...filters, maxPrice: price })
    }

    return (
        <>
            <Container>
                <Row >
                    <Col xs={12} md={8}>
                        <div className="d-flex justify-content-between py-3">
                            {width > 768 ? <p>Showing..</p> : (
                                <div onClick={() => setFilterIsOpen(true)} className="rubiks-font">
                                    <BiFilterAlt /> <span>Filter</span>
                                </div>
                            )}
                            <SortProducts sortOptions={sortOptions} selectedOption={filters.sort} onSelectOption={onSelectOption} />
                        </div>

                    </Col>
                    <ProductContainer />
                    <Col xs={12} md={4} className={filterIsOpen ? "mobile-filter open" : "mobile-filter"}>
                        {width > 768 ? <p></p> : (
                            <div onClick={() => setFilterIsOpen(false)} className="rubiks-font hide-filter mx-4">
                                <span>Hide filters</span> <IoMdClose />
                            </div>
                        )}
                        <CategoriesFilter selectCategory={onSelectCategory} />
                        <PriceFilter onPriceChange={onPriceChange} price={filters.maxPrice} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductListing;