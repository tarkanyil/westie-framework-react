import React from "react";
import ServicesItem from "./ServicesItem";
import { Container, Row, Col } from "reactstrap";

const Services = (props) => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h2>Choose your potion!</h2>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <ServicesItem
            title="The Westie Trainer"
            icon="Trophy"
            text="The Westie Trainer is a personal digital Trainer which analyzes your personal 
            skills and goals in WCS and provides you with long, middle or short term training plans."
          />
        </Col>
        <Col md="6">
          <ServicesItem
            title="...coming soon..."
            icon="Soon"
            text="We are planning further applications that help the Westie community. Stay tuned!"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
