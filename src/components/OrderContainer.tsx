import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { Col } from "react-bootstrap";
import BootstrapPagination from "./ProductComponents/CustomPagination";
import Loader from "./Loader";
import { useOrders } from "../helper/hooks";
import { UserType } from "../helper/types";
import OrderReceipt from "./OrderReceipt";

interface props {
  user: UserType;
}

const OrderContainer: React.FC<props> = ({ user }) => {
  const getOrders = useOrders(user);
  const orders = getOrders.data ?? [];

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const slicedOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  if (getOrders.isLoading) {
    return <Loader />;
  }

  return (
    <Col xs={12} md={8} className="mx-auto">
      <h2 className="mb-4 text-center">Here are your orders</h2>
      {slicedOrders.map((order, i) => (
        <OrderReceipt key={i} order={order} />
      ))}
      <BootstrapPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Col>
  );
};

export default OrderContainer;
