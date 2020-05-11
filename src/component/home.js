import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="center">Cottage Lake Seeds</h1>
                <h2 className="center">Established in 2020, <br />
we aim to provide <em>quality seeds</em> in the Pacific Northwest.</h2>
                <div className="block mx-auto">
                    <Button outline className="btn-lg btn-home mx-auto">Carousel</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;