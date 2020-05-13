import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {
    render(){
        return (
        <React.Fragment>        
        <div className="container">
            <Row>
                <Col xs={2}></Col>
                <Col>
                    <Row><Col><strong>Lastest Update</strong></Col></Row>
                    <Row><Col>May 1, 2020</Col></Row>
                    <hr />
                    <Row>
                        <Col>
                            <p>Inspired by our business partner, <a href="https://www.nucamp.co" target="_blank"><strong>Nucamp</strong></a>, we started our business in early March of 2020.</p>
                            <p>Our current focus is to provide quality seeds and seedings of numerous varieties, including flowers, vegetables, and herbaceous plants</p>
                            <p>Please check <Link to="purchase">our catalog</Link>.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </React.Fragment>
        );
    }
}

export default About;