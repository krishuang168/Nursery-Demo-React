import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Table } from "reactstrap";
import { connect } from "react-redux";
import { updateBasket } from "../redux/ActionCreators";
import { SmallCard } from "./Cards";
import shoppingBasket from "../shared/svg/shoppingBasket.svg";
import rearrangeID from "../shared/utility/rearrangeID";

const mapStateToProps = (state) => {
  return { basket: state.ReduxBasket };
};

const mapDispatchToProps = {
  updateBasket: (basket) => updateBasket(basket),
};

class ShoppingBasket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: this.props.basket,
    };
  }

  handleRemove = (e) => {
    var updatedBasket = this.state.basket.filter((item) => item.id !== e.id);

    this.statesUpdate(updatedBasket);
  };

  handlePlusOne = (e) => {
    var updatedBasket = this.state.basket.map((item) => {
      var tempArray = { ...item };

      if (item.id === e.id) {
        tempArray.quantity += 1;
      }
      return tempArray;
    });

    this.statesUpdate(updatedBasket);
  };

  handleMinusOne = (e) => {
    var updatedBasket = this.state.basket.map((item) => {
      var tempArray = { ...item };

      if (item.id === e.id && tempArray.quantity > 0) {
        tempArray.quantity -= 1;
      } // else (quantity == 0): do nothing
      return tempArray;
    });
    // Remove (qunatity == 0) items
    updatedBasket = updatedBasket.filter((item) => item.quantity > 0);

    this.statesUpdate(updatedBasket);
  };

  emptyBasket = () => {
    const updatedBasket = new Array(0);

    this.statesUpdate(updatedBasket);
  };

  statesUpdate = (newBasket) => {
    newBasket = rearrangeID(newBasket);
    this.setState({ basket: newBasket });
    this.props.updateBasket(newBasket);
  };

  render() {
    var subtotal = 0;
    const basket = this.state.basket; // To avoid touch the state directly

    const merchandise = basket.map((item) => {
      subtotal += item.price * item.quantity;

      return (
        <tr key={item.id}>
          <td className="center">
            <SmallCard
              name={item.name}
              image={item.image}
              text={`$${item.price}`}
            />
          </td>
          <td className="center">{item.quantity}</td>
          <td className="center">
            {/* The '+' Button */}
            <Button
              className="btn-primary"
              onClick={() => this.handlePlusOne(item)}
            >
              +
            </Button>{" "}
            {/* The '-' Button */}
            <Button
              className="btn-primary"
              onClick={() => this.handleMinusOne(item)}
            >
              -
            </Button>{" "}
            {/* The 'Remove' Button */}
            <Button
              className="btn-primary"
              onClick={() => this.handleRemove(item)}
            >
              Remove
            </Button>
          </td>
          <td className="center">{`$${(item.price * item.quantity).toFixed(
            2
          )}`}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div className="row row-content"></div>
        <Col>
          <strong>
            Your Shopping Basket
            <img
              src={shoppingBasket}
              alt="Shopping Basket"
              width="25"
              className="ml-3"
            />
          </strong>
        </Col>
        <hr />
        <Table>
          <thead className="shopping">
            <tr>
              <th className="center" colSpan="1">
                Product
              </th>
              <th className="center" colSpan="1">
                Quantity
              </th>
              <th className="center" colSpan="1">
                Actions
              </th>
              <th className="center" colSpan="1">
                Total
              </th>
            </tr>
          </thead>
          <tbody>{merchandise}</tbody>
        </Table>
        <hr />
        <div className="row-content">
          <Row>
            <Col xs={2} md={6}>
              <Link to="/catalog">
                <Button className="btn-light ml-auto">Conitnue shopping</Button>
              </Link>

              <Button
                className="btn-warning ml-3"
                outline
                onClick={() => this.emptyBasket()}
              >
                Empty Basket
              </Button>
              <Button className="btn-success ml-3">Checkout</Button>
            </Col>
            <Col className="mr-3 right bold">
              Subtotal: ${subtotal.toFixed(2)}
            </Col>
          </Row>
          <div className="row row-content"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);
