import React from 'react';
import { Card, CardHeader, CardBody, CardImg, CardText, 
        Row, Col, Button} from 'reactstrap';
import shoppingBasket from '../shared/svg/shoppingBasketWhite.svg';


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

export const ShoppingCard = ({name, image, text}) => {
    return (
        <Card sm={2} md={3}>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}} className="card-header">
                <Row>
                    <Col xs={9}><strong>{name}</strong></Col>
                    <Col><Button className="right btn-primary"><img src={shoppingBasket} title="Shopping Basket" alt="Shopping Basket" width="20" /></Button></Col>
                </Row>
            </CardHeader>
            <CardBody>
                <CardImg src={image} className="shopping" />
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    );
}