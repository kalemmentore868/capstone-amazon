import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditUserForm from "../components/EditUserForm";
import OrderContainer from "../components/OrderContainer";
import { useAppSelector } from "../redux/redux-hooks";

const UserDashboardPage = () => {
  const { user } = useAppSelector((state) => state.user);

  const [showEditForm, setShowEditForm] = useState(false);

  const [showOrders, setShowOrders] = useState(false);

  const displayForm = () => {
    setShowEditForm(true);
    setShowOrders(false);
  };

  const displayOrders = () => {
    setShowEditForm(false);
    setShowOrders(true);
  };

  return (
    <Container className="py-3 text-center" style={{ minHeight: "100vh" }}>
      <h1>Welcome {user?.first_name} !</h1>
      <h2 className="mt-3">What would you like to do?</h2>

      <div className="my-5">
        <Button onClick={displayForm} variant="success" className="my-2">
          Edit Profile Info
        </Button>
        <Button onClick={displayOrders} className="mx-4 my-2" variant="primary">
          View Orders
        </Button>
        <Button className="my-2" variant="warning">
          <Link className="text-white" to="/checkout">
            See Cart
          </Link>
        </Button>
      </div>

      {showEditForm && <EditUserForm userData={user} />}

      {showOrders && (
        <OrderContainer
          // @ts-ignore
          user={user}
        />
      )}
    </Container>
  );
};

export default UserDashboardPage;
