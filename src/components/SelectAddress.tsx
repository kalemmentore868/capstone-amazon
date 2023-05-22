import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AddressType } from "../helper/types"; // Assuming you have a types file for AddressType
import { apiClient } from "../helper/api";
import { useQuery } from "react-query";
import Loader from "./Loader";

interface AddressSelectProps {
  onSelectAddress: (address: AddressType) => void;
  onAddAddress: () => void;
}

const fetchAddress = () => {
  const userString = localStorage.getItem("user");
  if (userString === null) return;
  const user = JSON.parse(userString);
  const headers = { Authorization: `Bearer ${user.token}` };
  return apiClient.get(`/addresses/users/${user.id}`, { headers });
};

const AddressSelect: React.FC<AddressSelectProps> = ({
  onSelectAddress,
  onAddAddress,
}) => {
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );

  const { data, isLoading } = useQuery("addresses", fetchAddress);

  if (isLoading) <Loader />;

  const addresses = data?.data.data || [];

  return (
    <div className="my-4">
      {addresses.length > 0 ? (
        <div>
          <h2 className="mb-3">Select An Address</h2>
          <Form.Select
            className="mb-3"
            value={selectedAddressId ? selectedAddressId.toString() : ""}
            onChange={(e) => {
              const addressId = parseInt(e.target.value);
              setSelectedAddressId(addressId);
              const selectedAddress =
                addresses.find(
                  (address: AddressType) => address.id === addressId
                ) || null;
              onSelectAddress(selectedAddress);
            }}
          >
            <option value="">Select an address</option>
            {addresses.map((address: AddressType) => (
              <option key={address.id} value={address.id.toString()}>
                {address.street}, {address.city}
              </option>
            ))}
          </Form.Select>
        </div>
      ) : (
        <div>
          <p>No addresses found.</p>
          <Button onClick={onAddAddress}>Add Address</Button>
        </div>
      )}
    </div>
  );
};

export default AddressSelect;
