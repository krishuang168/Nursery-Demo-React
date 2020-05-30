import React from 'react';
import { Col, Row } from 'reactstrap';
import FeedbackForm from './FeedbackForm';
import sideDeco from '../shared/sideDeco.svg';


const Contact = () => {

    return (
        <React.Fragment>
            <img src={sideDeco} alt="Side decoration" id="sideDeco" className="growth"/>
            <div className="row row-content" />

            <div className="container">
                <Row>
                    <Col xs={2} />
                    <div className="row row-content"></div>
                    
                        <div className="col-sm-4">
                            <h5>Our Address</h5>
                            <address>
                                1 Cottage Lake Dr<br />
                                Woodinville, WA 98077<br />
                                U.S.A.
                            </address>
                        </div>
                        <div className="col">
                            <a role="button" href="tel:+12065551234"><i className="fa fa-phone"></i> +1-(425)-426-8778</a><br />
                            <a role="button" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> contact@cottagelakenursery.com</a>
                        </div>
                </Row>   
                <div className="row row-content" />
                <Row>
                    <Col xs={2} />
                    <div className="col center">
                        <iframe title="Our Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1341.1191542363226!2d-122.0897353419166!3d47.75743179797058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ1JzI2LjgiTiAxMjLCsDA1JzE5LjEiVw!5e0!3m2!1szh-TW!2sus!4v1589362418979!5m2!1szh-TW!2sus" width="100" height="100" frameBorder="0"  allowFullScreen="" tabIndex="0" />
                    </div>
                </Row>
                <div className="row row-content" />
                <Row>
                    <Col xs={1} />
                    <div className="col center">
                        <FeedbackForm />
                    </div>
                </Row>
            </div>
        </React.Fragment>
    );
    
}

export default Contact;