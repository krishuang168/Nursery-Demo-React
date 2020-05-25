import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { BigCard } from './Card';

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
                                <BigCard name="Flowers" 
                                image="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
                                />
                            </Col>
                            <Col md={3}>
                                <BigCard name="Veggies" 
                                image="https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVLET120-1_medium.jpg"
                                />
                            </Col>
                            <Col md={3}>
                                <BigCard name="Herbs" 
                                image="https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHPER111-1_medium.jpg"
                                />
                            </Col>
                            <Col md={3}>
                                <BigCard name="Trees & Bushes" 
                                image="https://d3hne3c382ip58.cloudfront.net/resized/400x400/cherry-blossom-festival-tour-and-trips-400X400_1572932637.JPG"
                                />
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