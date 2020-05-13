import React from 'react';
import { Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../shared/svg/logo.svg';
import shoppingBasket from '../shared/svg/shoppingBasket.svg';


function Header() {
    return(
        <React.Fragment>
            <Row>
                <Col xs={7} sm={4} md={2}>
                    <a href="/home"><img src={logo} alt="Logo" className="logo-big"/></a>
                </Col>
                <Col>
                    <Row>
                        <Col xs={10} sm={7} md={5}><h1 className="banner">Cottage Lake Seeds</h1></Col>
                        <Col className="navbar mr-5">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about_us">About Us</NavLink>
                            <NavLink to="/contact_us">Contact Us</NavLink>
                            <NavLink to="/purchase">Online Purchase</NavLink>
                            <NavLink to="/shopping_cart"><img src={shoppingBasket} alt="Shopping Basket"/></NavLink>
                        </Col>
                    </Row>
                    <Row>
                    <h2 className="banner">Established in 2020, we aim to provide <em>quality seeds</em> & <em>seedlings</em> in the Pacific Northwest.</h2>
                    </Row>
                </Col>
            </Row>            
        </React.Fragment>
    );
}

export default Header;