import React from "react";
import { Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../shared/svg/logo.svg";
import shoppingBasket from "../shared/svg/shoppingBasket.svg";

function Header() {
  return (
    <React.Fragment>
      <Row>
        <Col xs={5} md={2}>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-big" />
          </Link>
        </Col>
        <Col xs={4} sm={10}>
          <h1 className="title">Cottage Lake Nursery</h1>
        </Col>
      </Row>
      <Row>
        <div className="row-content" />
        <Col>
          <h2 className="banner">
            Established in 2020, we aim to provide <em>quality seeds</em> &
            <em>plantlings</em> in the Pacific Northwest.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="navbar ml-3">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about_us">About Us</NavLink>
          <NavLink to="/contact_us">Contact Us</NavLink>
          <NavLink to="/catalog">Online Purchase</NavLink>
          <NavLink to="/shopping_basket">
            <img
              src={shoppingBasket}
              title="Shopping Basket"
              alt="Shopping Basket"
              width="25"
            />
          </NavLink>
          <NavLink to="/covid-19" id="covid-19">
            COVID-19
          </NavLink>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;
