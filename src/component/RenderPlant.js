import React from 'react';
import { Row, Col} from 'reactstrap';
import { BigCard } from './Cards';

const RenderPlant = ({plantsData}) => {
    const plants = plantsData.map(item => 
        <Col><BigCard name={item.name} image={item.image} /></Col>
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

export default RenderPlant;