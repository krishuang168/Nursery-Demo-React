import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import sideDeco from '../shared/sideDeco.svg';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={sideDeco} alt="Side decoration" id="sideDeco" className="growth"/>
                <div className="row row-content" />
                
                <div className="container">
                    <Row>
                        <Col xs={1} />
                        <Col >
                        <div className="main">
                            <h1>Carousel</h1>
                        </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;