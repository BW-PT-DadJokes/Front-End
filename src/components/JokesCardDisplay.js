import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import JokeCard from "./jokes";
import { Button, Container, Row } from "reactstrap";

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

  const handleDelete = (event, id) => {
    event.preventDefault()

    // get user object in case we need to restore it
    const joke = jokes.find((joke) => joke.id === id)

    if (window.confirm("Are you sure you want to delete this joke?")) {

      setJokes(jokes.filter((joke) => joke.id !== id))

      axiosWithAuth()
        .delete(`/jokes/${id}`)
        .then((result) => {
          console.log("Joke was deleted")
        })
        .catch((error) => {
          console.log(error)

          // put joke back if the request wasn't successful
          setJokes([...jokes, joke])
        })
    }
  }


  return (
    <Container>
      <Row>
        <div>
          {jokes.map(item => {
            return (
              <div key={jokes.id}>
                <JokeCard joke={item} />
                <Link className="joke-update" to={`/jokes/${jokes.id}`}>Edit</Link>
                <Button
                  className="joke-delete"
                  onClick={(e) => handleDelete(e, jokes.id)}
                >
                  Delete
            </Button>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
