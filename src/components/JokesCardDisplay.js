import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeCard from "./jokes";
import { Container, Row } from "reactstrap";

export default function JokesData() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://github.com/BW-PT-DadJokes/Back-End/blob/master/database/seeds/02-jokes.js"
      )
      .then(response => {
        console.log(response.data.results);
        setJokes(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {jokes.map(item => {
          //  console.log(item.name)

          console.log(item.question);
          return (
            <div>
              <div class="row">
                <div class="col">
                  <JokeCard user_id={item.user_id} />
                  question={item.question}
                  punchline={item.punchline}
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}
