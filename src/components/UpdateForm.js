import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



function UpdateJoke(props) {
  const [joke, setJoke] = useState({
    id: "",
    question: "",
    punchline: "",
  })

  useEffect(() => {
    axiosWithAuth()
      .get(`/jokes/${props.match.params.id}`)
      .then(result => {
        setJoke(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [props.match.params.id]);

  const handleChange = (event) => {
    setJoke({
      ...joke,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axiosWithAuth()
      .put(`/jokes/${joke.id}`, joke)
      .then((result) => {
        props.history.push("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Edit Joke</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Question"
          value={joke.question}
          onChange={handleChange}
        />
        <input
          type="text"
          name="punchline"
          placeholder="Punchline"
          value={joke.punchline}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default UpdateJoke