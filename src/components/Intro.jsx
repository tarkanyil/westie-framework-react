import React from "react";
import { Container, Row, Col } from "reactstrap";

const Intro = (props) => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <div class="intro row text-center text-md-left">
            <div class="jt-content">
              <h1 class="display-4">Welcome!</h1>
              <p class="lead text-center text-md-left mr-auto ml-auto">
                We love West Coast Swing, like YOU do. We are nerds. We design
                tools to help YOU grow.
              </p>

              <p class="">This is the WESTIE FRAMEWORK!</p>
              <button class="btn btn-info btn-lg">Discover more...</button>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div class="logoarea text-center">
            <img class="" src="https://picsum.photos/300/200" alt="logo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
