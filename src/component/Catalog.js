import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { BigCard } from './Cards';

class Catalog extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="row row-content" />

                <div className="container">
                    <Row>
                        <Col xs={1} />
                        <Col>
                            <Row><Col><strong>Current Catalog</strong></Col></Row>
                            <Row><Col>Last updated: May 1, 2020</Col></Row>
                            <hr />
                            <Row>
                                <Col md={3}>
                                    <Link to="/flowers" className="no-underline">
                                        <BigCard name="Flowers" 
                                        image="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
                                        />
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/veggies" className="no-underline">
                                    <BigCard name="Vegetables" 
                                    image="https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVLET120-1_medium.jpg"
                                    />
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/herbs" className="no-underline">
                                    <BigCard name="Herbs" 
                                    image="https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHPER111-1_medium.jpg"
                                    />
                                    </Link>
                                </Col>
                                <Col md={3}>
                                    <Link to="/trees" className="no-underline">
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