import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row row-content" />

                <div className="container">
                    <Row>
                        <Col xs={2} />
                        <div className="main">
                            <h1>Carousel</h1>
                        </div>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;