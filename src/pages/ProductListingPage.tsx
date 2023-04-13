import React, { useState } from 'react';
import { useFetchAllProducts } from '../helper/UsefulFuntions';
import { Row, Col, Container } from 'react-bootstrap';
import "../assets/css/productListing.css"
import ProductCard3 from '../components/ProductCard3';
import CategoriesFilter from '../components/ProductComponents/CategoriesFilter';
import PriceFilter from '../components/ProductComponents/PriceFilter';
import { useWindowScroll, useWindowSize } from "react-use";
import { BiFilterAlt } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import SortProducts from '../components/ProductComponents/SortProducts';
import { Link } from 'react-router-dom';


const ProductListing: React.FC = () => {

    const { isLoading, apiError, apiData } = useFetchAllProducts(
        "GET",
        `${process.env.REACT_APP_API_ENDPOINT}/products`,
        {}
    );
    const { width } = useWindowSize()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const { y } = useWindowScroll();
    const sortOptions = ["Default sorting", "Sort by popularity", "Sort by price: high to low", "Sort by price: low to high", "Sort by newest arrivals"]
    let selectOpt = ""
    if (y > 0 && filterIsOpen) setFilterIsOpen(false)

    const onSelectOption = (option: string) => {
        selectOpt = option
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
                            <SortProducts sortOptions={sortOptions} selectedOption={sortOptions[0]} onSelectOption={onSelectOption} />
                        </div>
                        {apiData.map(data => <ProductCard3 key={data.id} product={data} />)}
                    </Col>
                    <Col xs={12} md={4} className={filterIsOpen ? "mobile-filter open" : "mobile-filter"}>
                        {width > 768 ? <p></p> : (
                            <div onClick={() => setFilterIsOpen(false)} className="rubiks-font hide-filter mx-4">
                                <span>Hide filters</span> <IoMdClose />
                            </div>
                        )}
                        <CategoriesFilter />
                        <PriceFilter />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductListing;