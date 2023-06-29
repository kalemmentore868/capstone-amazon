import React, { useState } from "react";

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
/*
paginated manner.

Props
The component accepts the following props:

user: UserType (required): The user object for whom the orders are displayed.


The component uses the Bootstrap Grid system to create a responsive layout. It displays a heading with the user's orders, renders OrderReceipt components for each order, and includes a pagination component provided by BootstrapPagination to navigate through the orders.

State
The component uses the useState hook to manage the following state:

currentPage: A number representing the currently active page.
ordersPerPage: The number of orders to display per page.
Custom Hooks
The component uses a custom hook useOrders to fetch the user's orders. It passes the user prop to this hook and retrieves the resulting data object, representing the orders.

Pagination
The pagination functionality is implemented by calculating the total number of pages (totalPages) based on the total number of orders (orders.length) and the number of orders per page (ordersPerPage). The handlePageChange function is used to update the currentPage state when the user navigates to a different page.

Loading State
While the orders are being fetched (getOrders.isLoading is true), the component displays a Loader component.

Dependencies
The component imports the following dependencies:

React and useState from the React library.
Col from react-bootstrap for grid layout.
BootstrapPagination for pagination.
Loader component for indicating loading state.
useOrders custom hook for fetching user's orders.
OrderReceipt component for rendering individual order details.

*/
