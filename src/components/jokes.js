import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const JokeCard = props => {
  console.log(props.user_id);
  console.log(props.question);
  console.log(props.punchline);

  return (
    <div key={props.user_id}>
      <Card>
        <CardTitle>{props.question}</CardTitle>
        <CardBody>{props.punchline}</CardBody>
      </Card>
    </div>
  );
};

export default JokeCard;
