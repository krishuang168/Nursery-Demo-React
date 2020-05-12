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
                        <iframe width="1000rem" height="600em" src="https://www.youtube.com/embed/w77zPAtVTuI" frameborder="0" autoplay allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;