import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

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
                        <Row><Col>May 1, 2020</Col></Row>
                        <hr />
                        <Row>
                            <Col>
                                <p>Flowering plants</p>
                                <p>Herbs</p>
                                <p>Vegetables</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            </React.Fragment>
        );
    }
}

export default Catalog;