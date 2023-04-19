import { useState } from 'react'
import { useProducts } from '../../helper/hooks';
import BootstrapPagination from '../ProductComponents/CustomPagination';
import Loader from '../Loader';
import AdminProductCard from './AdminProductCard';
import { Col, Row } from 'react-bootstrap';



const AdminProductContainer = () => {


    const getProducts = useProducts()
    const products = getProducts.data ?? [];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
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
        <>
            <Row>
                {slicedProducts.map((product) => (

                    <Col xs={12} md={3} key={product.id} className="my-3">
                        <AdminProductCard product={product} />
                    </Col>


                ))}
            </Row>
            <BootstrapPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>

    )
}

export default AdminProductContainer