import React from 'react';
import { Pagination } from 'react-bootstrap';

interface props {
    totalPages: number
    currentPage: number
    onPageChange: (number: number) => void
}

const BootstrapPagination: React.FC<props> = ({ totalPages, currentPage, onPageChange }) => {
    const pageItems = [];

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        pageItems.push(
            <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
            >
                {pageNumber}
            </Pagination.Item>
        );
    }

    return <Pagination>{pageItems}</Pagination>;
};

export default BootstrapPagination;
