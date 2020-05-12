import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../shared/logo.svg';


function Header() {
    return(
        <React.Fragment>
            <Row>
                <Col xs={2}>
                    <Link to="/home"><img src={logo} alt="Logo" className="logo-big"/></Link>
                </Col>
                <Col>
                    <Row>
                        <Col><h1 className="banner ml-5">Cottage Lake Seeds</h1></Col>
                        <Col className="navbar pagination mr-5">
                            <Link to="/home">Home</Link>
                            <Link to="/aboutus">About Us</Link>
                            <Link to="/shopping">Online Purchase</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </Col>
                    </Row>
                    <Row>
                    <h2 className="banner ml-5">Established in 2020, we aim to provide <em>quality seeds</em> & <em>seedlings</em> in the Pacific Northwest.</h2>
                    </Row>
                </Col>
            </Row>            
        </React.Fragment>
    );
}

export default Header;