import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { errorToast, successfulToast } from "../helper/toasties";
import { resetCart } from "../redux/cart";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { AddressType } from "../helper/types";

interface props {
  total: number;
  show: boolean;
  notes: string;
  address: AddressType;

  handleClose: Function;
}

const ModalC: React.FC<props> = (props: any) => {
  const { total, notes, handleClose, address, ...rest } = props;
  const [isLoading, setIsLoading] = useState(false);

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const makePurchase = async () => {
    setIsLoading(true);
    if (user) {
      const { id, token } = user;
      const headers = { Authorization: `Bearer ${token}` };

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/orders/${id}`,
          { notes: props.notes, address: props.address },
          { headers }
        );

        successfulToast(response.data.message);
        dispatch(resetCart());
        localStorage.removeItem("cart");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      errorToast("You must be logged in to make purchase");
      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <Modal {...rest} centered>
      <Modal.Header>
        <Modal.Title>Pay With Cash On Delivery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Items Total: ${total.toFixed(2)}</div>
        <div>Delivery fee: $15</div>
        <div>Total: ${(total + 15).toFixed(2)}</div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button
          variant="primary"
          size="lg"
          onClick={makePurchase}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Make Order"}
        </Button>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalC;
