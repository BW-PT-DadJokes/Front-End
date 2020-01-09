import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  Row,
  Col,
  Collapse,
  Button
} from "reactstrap";
const JokeCard = ({ joke }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      {localStorage.getItem("token") ? (
        <div key={joke.question}>
          <Container>
            <Row>
              <Card>
                <Col xs="auto">
                  <CardTitle>Question: {joke.question}</CardTitle>
                </Col>
                <Col xs="auto">
                  <CardBody>PunchLine: {joke.punchline}</CardBody>
                </Col>
                <Col xs="auto">
                  <CardBody>Private: {joke.private}</CardBody>
                </Col>
              </Card>
            </Row>
          </Container>
        </div>
      ) : (
        joke.private === "false" && (
          <div key={joke.question}>
            <Container>
              <Row>
                <Card>
                  <Col xs="auto">
                    <CardTitle>Question: {joke.question}</CardTitle>
                  </Col>
                  <Button color="primary" onClick={toggle}>
                    See Punchline
                  </Button>
                  <Collapse isOpen={open}>
                    <Col xs="auto">
                      <CardBody>PunchLine: {joke.punchline}</CardBody>
                    </Col>
                  </Collapse>
                  <Col xs="auto">
                    <CardBody>Private: {joke.private}</CardBody>
                  </Col>
                </Card>
              </Row>
            </Container>
          </div>
        )
      )}
    </>
  );
};

export default JokeCard;
