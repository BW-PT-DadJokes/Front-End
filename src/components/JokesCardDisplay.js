import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeCard from "./jokes";
import { Container, Row } from "reactstrap";

export default function JokesData() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dad-jokes-7.herokuapp.com/api/jokes")
      .then(response => {
        console.log(response.data.results);
        setJokes(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <div>
          {jokes.map(item => {
            return (
              <div>
                <JokeCard joke={item} />
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
