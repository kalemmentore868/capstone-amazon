import React, { useState, ChangeEvent, FormEvent } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { apiClient } from "../helper/api";
import { AddressFormType, UserType } from "../helper/types";
import { successfulToast } from "../helper/toasties";

interface props {
  onAddAddress: () => void;
}

const createAddress = (address: AddressFormType) => {
  const userString = localStorage.getItem("user");
  if (userString === null) return;
  const user = JSON.parse(userString);
  const headers = { Authorization: `Bearer ${user.token}` };
  return apiClient.post(`/addresses/${user.id}`, address, { headers });
};
const AddressForm: React.FC<props> = ({ onAddAddress }) => {
  const [address, setAddress] = useState<AddressFormType>({
    house_number: "",
    street: "",
    city: "",
  });

  //@ts-ignore
  const createAddressMutation = useMutation(createAddress, {
    onSuccess: () => {
      onAddAddress();
      successfulToast("Address added successfully");
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createAddressMutation.mutate(address);
  };

  return (
    <>
      <h2>Add your address</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="houseNumber">
              <Form.Label>House Number</Form.Label>
              <Form.Control
                type="text"
                name="house_number"
                value={address.house_number}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="street" className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddressForm;
