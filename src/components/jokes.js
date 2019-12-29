import React from "react";
import { Card, CardTitle, CardBody, Container, Row, Col } from "reactstrap";
const JokeCard = props => {
  console.log(props.user_id);
  console.log(props.question);
  console.log(props.punchline);

  return (
    <div key={props.question}>
      <Container>
        <Row>
          <Card>
            <Col xs="auto">
              <CardTitle>Question: {props.question}</CardTitle>
            </Col>
            <Col xs="auto">
              <CardBody>PunchLine: {props.punchline}</CardBody>
            </Col>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default JokeCard;
