import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardImg, CardText} from 'reactstrap';
import styles from '../css/styles.css';


export const RenderCard = (props) => {
    return (
        <Card>
            <CardHeader style={{backgroundColor: '#c3a0e5', textAlign: 'center'}}
                ><strong>{props.title}</strong>
            </CardHeader>
            <CardBody>
                <CardImg src={props.image} width="3em" height="200"></CardImg>
                <CardText>{props.text}</CardText>
            </CardBody>
        </Card>
    );
}