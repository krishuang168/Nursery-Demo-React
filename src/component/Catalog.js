import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { BigCard } from './Cards';

class Catalog extends Component {
    render(){
        return (
            <React.Fragment>
            <div className="container">
                <Row>
                    <Col xs={2}>
                        
                    </Col>
                    <Col>
                        <Row><Col><strong>Current Catalog</strong></Col></Row>
                        <Row><Col>Last updated: May 1, 2020</Col></Row>
                        <hr />
                        <Row>
                            <Col md={3}>
                                <Link to="/flowers">
                                    <BigCard name="Flowers" 
                                    image="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
                                    />
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link to="/veggies">
                                <BigCard name="Vegetables" 
                                image="https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVLET120-1_medium.jpg"
                                />
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link to="/herbs">
                                <BigCard name="Herbs" 
                                image="https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHPER111-1_medium.jpg"
                                />
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link to="/trees">
                                <BigCard name="Trees & Bushes" 
                                image="https://d3hne3c382ip58.cloudfront.net/resized/400x400/cherry-blossom-festival-tour-and-trips-400X400_1572932637.JPG"
                                />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="row-content" />
            </div>
            </React.Fragment>
        );
    }
}

export default Catalog;