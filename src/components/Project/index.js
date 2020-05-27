import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function Project(props) {
  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col size="md-6">
            <a href={props.href}>
              <img
                src={props.image}
                class="img-fluid"
                alt="foodradar"
                target="_blank"
              />
            </a>
          </Col>
          <Col size="md-6">
            <a href={props.href2}>
              <img
                src={props.image2}
                class="img-fluid"
                alt="foodradar"
                target="_blank"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
