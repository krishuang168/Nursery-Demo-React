import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function Covid19Announcement() {
    return( 
        <React.Fragment>
            <div className="row row-content" />
            
            <div className="container">
            <Row>
                <Col xs={1}></Col>

                <Col>
                    <Row>
                        <Col>
                            <Row><Col><strong>COVID-19 Update</strong></Col></Row>
                            <Row><Col>May 21, 2020</Col></Row>
                            <hr />
                            <Row>
                                <Col>
                                    <p><Link to="/catalog">Online purchase</Link> is available 24/7. </p>
                                    <p>We currently only provide <strong>curbside</strong> pickup service. <br />
                                    No in-store shopping is allowed per Governor's Stay-at-home order. </p>
                                    <img id="coronavirus" alt="Coronavirus" src={'https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg'} />          
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <img id="coronavirus" src={'https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg'} /> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </React.Fragment>
    );
}

export default Covid19Announcement;