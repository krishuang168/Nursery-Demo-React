import React from 'react';
import { Card, CardHeader,  CardBody, CardImg, CardText, Row, Col} from 'reactstrap';

export const BigCard = ({name, image, text}) => {
    return (
        <Card sm={2} md={3}>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}}
                ><strong>{name}</strong>
            </CardHeader>
            <CardBody>
                <CardImg src={image} width="3rem" />
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    );
}

export const SmallCard = ({name, image, text}) => {
    return (
        <Card>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}}
                ><strong>{name}</strong>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col><img src={image} alt={name} width="100" /></Col>
                    <Col className="center">{text}</Col>
                </Row>
            </CardBody>
        </Card>
    );
}