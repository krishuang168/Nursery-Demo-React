import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import sideDeco from "../shared/sideDeco.svg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={sideDeco}
          alt="Side decoration"
          id="sideDeco"
          className="growth"
        />
        <div className="row row-content" />

        <div className="container">
          <Row>
            <Col xs={12} />
            <Col>
              <Carousel
                interval={1000}
                keyboard={false}
                pause={false}
                touch
                slide
              >
                <Carousel.Item style={{ height: "30em" }}>
                  <img
                    className="d-block w-100"
                    style={{ height: "30em", objectFit: "cover" }}
                    alt="Our Farm Land"
                    title="Our Farm Land"
                    src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1076293128%2F960x0.jpg%3Ffit%3Dscale"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "30em" }}>
                  <img
                    className="d-block w-100"
                    style={{ height: "30em", objectFit: "cover" }}
                    alt="Our Greenhouse"
                    title="Our Greenhouse"
                    src="https://media.istockphoto.com/photos/allotments-at-sunset-plastic-greenhouse-picture-id483728598?k=6&m=483728598&s=612x612&w=0&h=-N4X-CHwDLBcHfdQqsv9mgtNssRn9icTZPq42h-RYmA="
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "30em" }}>
                  <img
                    className="d-block w-100"
                    style={{ height: "30em", objectFit: "cover" }}
                    alt="Inside The Greenhouse"
                    title="Inside The Greenhouse"
                    src="https://www.plantsbycreekside.com/wp-content/uploads/2015/03/greenhouse4-H2-2015.jpg"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <div className="row row-content" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
