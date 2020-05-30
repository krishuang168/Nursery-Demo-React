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

export const ShoppingCard = ({name, image, text, price}) => {
    return (
        <Card sm={2} md={3}>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}} className="card-header">
                <Row>
                    <Col xs={9}><strong>{name}</strong></Col>
                    <Col>
                        <Button className="right btn-primary">
                            <span className="no-underline" style={{fontSize: "0.1em"}}>➜</span>
                            <img src={shoppingBasket} title="Shopping Basket" alt="Shopping Basket" width="15" />
                        </Button>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col><CardImg src={image} className="shopping" /></Col>
                    <Col><strong>${price}</strong></Col>
                </Row>
                <CardText><em className="botanical">{text}</em></CardText>
            </CardBody>
        </Card>
    );
}