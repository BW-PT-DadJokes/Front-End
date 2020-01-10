import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialJoke = {
  question: '',
  punchline: ''
};

const UpdateForm = props => {
  const [joke, setJoke] = useState(initialJoke);
  useEffect(() => {
    const jokeToEdit = props.jokess.find(
      e => `${e.id}` === props.match.params.id
    );
    console.log(props.jokes, jokeToEdit);
    if (jokeToEdit) {
      setJoke(jokeToEdit);
    }
  }, [props.jokes, props.match.params.id]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'punchline') {
      value = parseInt(value, 10);
    }

    setJoke({
      ...joke,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
    axios
      .put(`https://dad-jokes-7.herokuapp.com/api/jokes/allJokes${joke.id}`, joke)
      .then(res => {
        // res.data ==> full array with updated item

        // const newItemsArr = props.items.map
        props.updateJokes(res.data);
        props.history.push(`/${joke.id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Joke</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Question"
          value={joke.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="punchline"
          onChange={changeHandler}
          placeholder="Punchline"
          value={joke.punchline}
        />
        <div className="baseline" />


        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;

/*
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";

// ACTION
import { addJoke } from "../actions/jokeActions";

const AddJokeForm = ({ values, errors, touched, status }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    status && setJokes(jokes => [...jokes, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <h1>Edit A Joke</h1>
        <Field component="textarea" name="question" placeholder="Question" />
        {touched.question && errors.question && <p>{errors.question}</p>}
        <Field component="textarea" name="punchline" placeholder="Punch line" />
        {touched.punchline && errors.punchline && <p>{errors.punchline}</p>}
        <FormGroup check>
          <Label check>
            <Field
              name="privateJoke"
              type="checkbox"
              checked={values.privateJoke}
            />
            Set to private
          </Label>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>

      {jokes.map(joke => {
        return (
          <ul key={joke.id}>
            <li>Question: {joke.question}</li>
            <li>Punchline: {joke.punchline}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikAddJokeForm = withFormik({
  mapPropsToValues({ question, punchline, privateJoke }) {
    return {
      question: question || "",
      punchline: punchline || "",
      privateJoke: privateJoke || false
    };
  },
  validationSchema: Yup.object().shape({
    question: Yup.string().required("QUESTION IS REQUIRED"),
    punchline: Yup.string().required("PUNCHLINE IS REQUIRED")
  }),
  handleSubmit(values, { props }) {
    props.addJoke(values);
    console.log("submitting", values, props);
  }
})(AddJokeForm);
export default connect(null, { addJoke })(FormikAddJokeForm);
*/