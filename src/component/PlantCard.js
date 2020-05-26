import React from 'react';
import { Row, Col} from 'reactstrap';
import { ShoppingCard } from './Cards';

const PlantCard = ({plantsData}) => {
    const plants = plantsData.map(item => 
        <Col sm={3} md={4}><ShoppingCard name={item.name} image={item.image} className="shopping" /></Col>
        );

    return (
        <React.Fragment>
            <div className="row row-content" />
            <div className="container">
                <div className="row row-content">
                    <Row>{plants}</Row>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PlantCard;