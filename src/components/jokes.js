import React from "react";
import { Card, CardTitle, CardBody, Container, Row, Col } from "reactstrap";
const JokeCard = ({ joke }) => {
  console.log('JOKE', joke, 'TOKEN', localStorage.getItem('token'), 'PRIVATE', joke.private)

  // if(localStorage.getItem('token')){
  //   return (
  //     <div key={joke.question}>
  //       <Container>
  //         <Row>
  //           <Card>
  //             <Col xs="auto">
  //               <CardTitle>Question: {joke.question}</CardTitle>
  //             </Col>
  //             <Col xs="auto">
  //               <CardBody>PunchLine: {joke.punchline}</CardBody>
  //             </Col>
  //             <Col xs="auto">
  //               <CardBody>Private: {joke.private}</CardBody>
  //             </Col>
  //           </Card>
  //         </Row>
  //       </Container>
  //     </div>
  //   );
  // }else if(joke.private === 'false'){
  //   return (
  //     <div key={joke.question}>
  //       <Container>
  //         <Row>
  //           <Card>
  //             <Col xs="auto">
  //               <CardTitle>Question: {joke.question}</CardTitle>
  //             </Col>
  //             <Col xs="auto">
  //               <CardBody>PunchLine: {joke.punchline}</CardBody>
  //             </Col>
  //             <Col xs="auto">
  //               <CardBody>Private: {joke.private}</CardBody>
  //             </Col>
  //           </Card>
  //         </Row>
  //       </Container>
  //     </div>
  //   );
  // }
  return(
    <>
      {/* {joke.private === 'false' && (
  
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
      )} */}
    

    (localStorage.getItem('token')) && joke.private === 'true' &&{
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
    }
    </>
  )
};

export default JokeCard;
