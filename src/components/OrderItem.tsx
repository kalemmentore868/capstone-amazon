import { Row, Card } from "react-bootstrap";
import { CartItemType } from "../helper/types";

interface OrderItemProps {
  orderItem: CartItemType;
}

const OrderItem: React.FC<OrderItemProps> = ({ orderItem }) => {
  return (
    <Row className="my-2">
      <Card className="product-card-3 mb-2 p-2">
        <div className="product-card-3-image rounded">
          <Card.Img src={orderItem.img_url} />
        </div>
        <Card.Body className="product-card-3-body">
          <div>
            <Card.Title className="product-card-3-title">
              {orderItem.name}
            </Card.Title>

            <Card.Text className="product-card-3-description">
              Quantity: {orderItem.quantity}
            </Card.Text>
            <Card.Text className="product-card-3-price">
              Price ${orderItem.price.toFixed(2)}
            </Card.Text>
            <Card.Text className="product-card-3-description">
              Total: ${(orderItem.quantity * orderItem.price).toFixed(2)}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default OrderItem;
