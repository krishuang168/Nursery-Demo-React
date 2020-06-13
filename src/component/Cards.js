import React from "react";
import { connect } from "react-redux";
import { putInBasket } from "../redux/ActionCreators";
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";
import shoppingBasket from "../shared/svg/shoppingBasketWhite.svg";

export const BigCard = ({ name, image, text }) => {
  return (
    <Card sm={2} md={3} className="card">
      <CardHeader style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}>
        <strong>{name}</strong>
      </CardHeader>
      <CardBody>
        <CardImg src={image} width="3rem" />
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

export const SmallCard = ({ name, image, text }) => {
  return (
    <Card className="card card-small">
      <CardHeader style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}>
        <strong>{name}</strong>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <img src={image} alt={name} width="100" />
          </Col>
          <Col className="center">{text}</Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { basket: state.updateBasket };
};

const mapDispatchToProps = {
  putInBasket: (item_index) => putInBasket(item_index),
};

const ShoppingCard_original = (props) => {
  const { name, image, text, price } = props;
  const itemData = { name, image, price, quantity: 1 };
  console.log("itemData: " + JSON.stringify(itemData));

  return (
    <Card sm={2} md={4} className="card">
      <CardHeader
        style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}
        className="card-header"
      >
        <Row>
          <Col xs={8}>
            <strong>{name}</strong>
          </Col>
          <Col>
            <Button
              className="right btn-primary"
              onClick={() => props.putInBasket(itemData)}
            >
              <span className="no-underline" style={{ fontSize: "0.1em" }}>
                ➜
              </span>
              <img
                src={shoppingBasket}
                title="Shopping Basket"
                alt="Shopping Basket"
                width="15"
              />
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <CardImg src={image} className="shopping" />
          </Col>
          <Col>
            <strong>${price}</strong>
          </Col>
        </Row>
        <CardText>
          <em className="botanical">{text}</em>
        </CardText>
      </CardBody>
    </Card>
  );
};

// To export the named component while being connected to Redux Store
export const ShoppingCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCard_original);
