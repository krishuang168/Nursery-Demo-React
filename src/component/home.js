import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../css/styles.css';
import Header from './Header';
import Footer from './Footer';
import sideDeco from '../shared/sideDeco.svg';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main">
                <img src={sideDeco} id="sideDeco"/>
                    <div className="block mx-auto">
                        <iframe width="1000rem" height="500em" src="https://www.youtube.com/embed/w77zPAtVTuI?&autoplay=1&mute=1" frameborder="0" autoplay allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;