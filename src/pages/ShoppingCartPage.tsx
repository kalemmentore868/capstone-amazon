import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CartItem from "../components/ShoppingCartComponents/CartItem";
import CartHeading from "../components/ShoppingCartComponents/CartHeading";
import CartTotal from "../components/ShoppingCartComponents/CartTotal";
import { useAppSelector } from "../redux/redux-hooks";
import { useDispatch } from "react-redux";
import { removeItemFromCart, setBill } from "../redux/cart";
import { Button, Card, Form } from "react-bootstrap";
import ModalC from "../components/Modal";
import AddressForm from "../components/AddressForm";
import AddressSelect from "../components/SelectAddress";
import { AddressFormType, AddressType } from "../helper/types";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState<AddressFormType | null>(null);
  const [paymentReady, setPaymentReady] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (cart) {
      for (let item of cart.items) {
        if (item.quantity === 0) {
          dispatch(removeItemFromCart(item.productId));
        }
      }
      dispatch(setBill());
    }
  }, [cart, dispatch]);

  const onSelectAddress = (address: AddressType) => {
    setShowAddressForm(false);

    setAddress(address);
    setPaymentReady(true);
  };

  const onAddAddress = () => {
    setShowAddressForm(false);
  };

  return (
    <section style={{ minHeight: "100vh" }}>
      <Container className=" py-5">
        {cart ? (
          <>
            {" "}
            <Row className="d-flex justify-content-center align-items-center">
              <CartHeading />
              {cart?.items?.map((item) => {
                return <CartItem key={item.productId} item={item} />;
              })}

              <CartTotal total={cart?.bill} />

              <Form.Label>Notes:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a note here for any other items"
                className="mb-4"
                style={{ height: "100px" }}
                onChange={(e) => setNotes(e.target.value)}
              />

              <div className="mb-4">
                <AddressSelect
                  onSelectAddress={onSelectAddress}
                  onAddAddress={() => setShowAddressForm(true)}
                />

                <Button onClick={() => setShowAddressForm(true)}>
                  Add Another Address
                </Button>
              </div>

              {showAddressForm && <AddressForm onAddAddress={onAddAddress} />}

              <Card className="mb-4">
                <Card.Body className="d-grid p-4">
                  <Button
                    size="lg"
                    variant="warning"
                    onClick={handleShow}
                    className="btn-block text-light"
                    disabled={!paymentReady}
                  >
                    Proceed to Pay
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <ModalC
              total={cart?.bill}
              show={show}
              handleClose={handleClose}
              notes={notes}
              // @ts-ignore
              address={address}
            />
          </>
        ) : (
          <>
            <h2>You have no items in your cart</h2>
            <div className="text-center">
              Click <Link to={"/"}>here</Link> to go back to the home page
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default ShoppingCartPage;
