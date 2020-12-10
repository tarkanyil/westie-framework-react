import React from "react";
import AboutItem from "./AboutItem";
import { Container, Row, Col } from "reactstrap";

const About = (props) => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h2>What is the Westie Framework?</h2>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <AboutItem
            icon="Desc"
            text="The Westie Framework offers an easy accessible toolset for Westie dancers to improve
                  their dance and Westie teachers to facilitate their business."
          />
        </Col>
        <Col md="6">
          <AboutItem
            icon="Support"
            text="It’s guiding, challenging, supporting, inspiring,
                  verifying and analyzing you and your West Coast Swing dance!"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
