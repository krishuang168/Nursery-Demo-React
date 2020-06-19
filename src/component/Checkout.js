import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  openCheckout,
  closeCheckout,
  updateBasket,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    show: state.CheckoutModal,
  };
};

const mapDispatchToProps = {
  openCheckout: () => openCheckout(),
  closeCheckout: () => closeCheckout(),
  updateBasket: (basket) => updateBasket(basket),
};

// == Checkout Component ==
function Checkout(props) {
  const [delivery, setDelivery] = useState(false);
  const { subtotal, show } = props;

  const taxRate = 0.1;
  const deliveryFee = delivery ? (subtotal ? 7.99 : 0) : 0;
  const total = subtotal * (1 + taxRate) + deliveryFee;

  // Determine Delivery from Checkbox is checked or not
  const determineDelivery = (evt) => {
    setDelivery(evt.target.checked);
    if (subtotal === 0) alert("You have to put something in the basket!");
  };

  const handleOrder = (total) => {
    const emptyBasket = new Array(0);

    props.closeCheckout();
    total === 0
      ? alert("Your basket is empty.")
      : alert("We have received your order.");
    props.updateBasket(emptyBasket);
  };

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Subtotal: {`$${subtotal}`}</p>
        <p>Sales Tax: {`${taxRate * 100}%`}</p>
        <input type="checkbox" onChange={(evt) => determineDelivery(evt)} />
        {` Delivery: $${deliveryFee}`}
        <hr />
        <strong className="row row-content ml-1">
          Your total is {`$${total.toFixed(2)}`}
        </strong>
        <p>
          <Image
            src={
              "https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png"
            }
            width={70}
          />
          <Image
            src={
              "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/206_Mastercard_Credit_Card_logo_logos-512.png"
            }
            width={70}
          />
          <Image
            src={
              "https://i.pinimg.com/originals/6e/79/ac/6e79ac75e164ffa85f36f772fdaa41aa.png"
            }
            width={70}
          />
          <Image
            src={
              "https://www.discover.com/company/images/newsroom/media-downloads/discover@2x.png"
            }
            width={70}
          />
        </p>
        <Form>
          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="number" placeholder="Card Number" />
          </Form.Group>
          <Form.Group controlId="CVV">
            <Form.Label>3-degit / 4-digit (Amex) Security Code</Form.Label>
            <Form.Control type="number" placeholder="Security Code" />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Physical Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
          <Form.Group controlId="RememberBuyer">
            <Form.Check type="checkbox" label="Save for later use" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-light" onClick={() => props.closeCheckout()}>
          Later
        </Button>
        <Button className="btn-primary" onClick={() => handleOrder(total)}>
          Place Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
