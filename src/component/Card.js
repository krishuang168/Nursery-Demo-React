import React from 'react';
import { Card, CardHeader,  CardBody, CardImg, CardText} from 'reactstrap';

export const BigCard = ({name, image, text}) => {
    return (
        <Card>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}}
                ><strong>{name}</strong>
            </CardHeader>
            <CardBody>
                <CardImg src={image} width="3em" />
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    );
}

export const SmallCard = ({name, image}) => {
    return (
        <Card>
            <CardHeader style={{backgroundColor: '#c3a0e5', fontSize: '12px', textAlign: 'center'}}
                ><strong>{name}</strong>
            </CardHeader>
            <CardBody>
                <img src={image} width="100" />
            </CardBody>
        </Card>
    );
}