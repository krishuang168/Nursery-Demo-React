import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import Header from './Header';
import Footer from './Footer';
import sideDeco from '../shared/sideDeco.svg';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main">
                <img src={sideDeco} className="my-auto" id="side-deco"/>
                    <div className="block mx-auto">
                        <Row>
                            <Col>
                            <Button outline className="btn-lg btn-home">Carousel</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;