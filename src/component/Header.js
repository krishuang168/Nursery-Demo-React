import React from "react";
import { Col, Row, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../shared/svg/logo.svg";
import shoppingBasket from "../shared/svg/shoppingBasket.svg";

const MyNavbar = () => {
  return (
    <Nav className="navbar">
      <Col xs={12} md={2}>
        <NavLink to="/home" aria-current="page">
          Home
        </NavLink>
      </Col>
      <Col xs={12} md={2}>
        <NavLink to="/about_us" aria-current="page">
          About Us
        </NavLink>
      </Col>
      <Col xs={12} md={2}>
        <NavLink to="/contact_us" aria-current="page">
          Contact Us
        </NavLink>
      </Col>
      <Col xs={12} md={2}>
        <NavLink to="/catalog" aria-current="page">
          Online Purchase
        </NavLink>
      </Col>
      <Col xs={12} md={2}>
        <NavLink to="/shopping_basket" aria-current="page">
          <img
            src={shoppingBasket}
            title="Shopping Basket"
            alt="Shopping Basket"
            width="25"
          />
        </NavLink>
      </Col>
      <Col xs={12} md={2}>
        <NavLink to="/covid-19" id="covid-19" aria-current="page">
          COVID-19
        </NavLink>
      </Col>
    </Nav>
  );
};

function Header() {
  return (
    <React.Fragment>
      <Row>
        <Col xs={0} md={2}>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-big d-none d-md-block" />
          </Link>
        </Col>
        <Col xs={12} md={10}>
          <h1 id="title">Cottage Lake Nursery</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={0} md={2} />
        <Col>
          <Row>
            <h2 id="subtitle">
              Established in 2020, we aim to provide <em>quality seeds</em> &
              <em>plantlings</em> in the Pacific Northwest.
            </h2>
          </Row>
          <Row xs={8} md={10}>
            <MyNavbar />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Header;
