import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import sideDeco from '../shared/sideDeco.svg';

class About extends Component {
    render(){
        return (
        <React.Fragment>        
            <img src={sideDeco} alt="Side decoration" id="sideDeco" className="growth"/>
            <div className="row row-content" />

            <div className="container">
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <Row><Col><strong>Lastest Update</strong></Col></Row>
                        <Row><Col>May 1, 2020</Col></Row>
                        <hr />
                        <Row>
                            <Col>
                                <p>Inspired by our business partner, <a href="https://www.nucamp.co" target="_blank" rel="noopener noreferrer"><strong>Nucamp</strong></a>, we started our business in early March of 2020.</p>
                                <p>Our current focus is to provide quality seeds and seedings of numerous varieties, including flowers, vegetables, and herbaceous plants</p>
                                <p>Please check <Link to="/catalog">our catalog</Link>.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}/>
                    <Col>
                        <div className="video">
                        <iframe title="Embedded Video"src="https://www.youtube.com/embed/w77zPAtVTuI?&autoplay=1&loop=1&mute=1&start=2&end=60" frameBorder="0" allow="accelerometer; autoplay; loop; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
        );
    }
}

export default About;