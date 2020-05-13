import React from 'react';
import { Row, Col } from 'reactstrap';
import sideDeco from '../shared/sideDeco.svg';

function Covid19Announcement(props) {
    return( 
        <React.Fragment>
        

        <div className="container">
            <Row>
                <Col xs={2}><img src={'https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg'} id="coronavirus" /></Col>
                <Col>
                    <Row><Col><strong>COVID-19 Update</strong></Col></Row>
                    <Row><Col>May 1, 2020</Col></Row>
                    <hr />
                    <Row>
                        <Col>
                            <p>We currently only provide curb-side pickup service. </p>
                            <p>Online purchase is available 24-7. </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </React.Fragment>
    );
}

export default Covid19Announcement;