import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sideDeco from '../shared/sideDeco.svg';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                <img src={sideDeco} id="sideDeco" className="growth"/>
                    <div className="block mx-auto">
                        <iframe src="https://www.youtube.com/embed/w77zPAtVTuI?&autoplay=1&loop=1&mute=1&start=2&end=60" frameBorder="0" allow="accelerometer; autoplay; loop; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;