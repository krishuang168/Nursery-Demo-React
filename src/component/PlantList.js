import React from "react";
import { Row, Col } from "reactstrap";
import { ShoppingCard } from "./Cards";

const PlantList = ({ plantsData }) => {
  const plants = plantsData.map((item) => (
    <Col sm={3} md={4}>
      <ShoppingCard
        className="shopping"
        name={item.name}
        image={item.image}
        text={item.botanical}
        price={item.price}
      />
    </Col>
  ));

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
};

export default PlantList;
