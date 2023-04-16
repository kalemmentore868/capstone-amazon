import { useState } from 'react'
import { useProducts } from '../../helper/hooks';
import ProductCard3 from '../ProductCard3';
import { Col } from 'react-bootstrap';
import BootstrapPagination from './CustomPagination';
import Loader from '../Loader';



const ProductContainer = () => {


    const getProducts = useProducts()
    const products = getProducts.data ?? [];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const slicedProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );



    if (getProducts.isLoading) {
        return <Loader />
    }

    return (
        <Col xs={12} md={8}>
            {slicedProducts.map((product) => (
                <ProductCard3 key={product.id} product={product} />
            ))}
            <BootstrapPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </Col>
    )
}

export default ProductContainer