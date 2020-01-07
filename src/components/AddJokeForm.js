import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label } from "reactstrap";
import { connect } from 'react-redux';

// ACTION
import { addJoke } from '../actions/jokeActions';

const AddJokeForm = ({ values, errors, touched, status }) => {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    status && setJokes(jokes => [...jokes, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <h1>Add A Joke</h1>
        <Field component="textarea" name="question" placeholder="Question" />
        {touched.question && errors.question && <p>{errors.question}</p>}
        <Field component="textarea" name="punchline" placeholder="Punch line" />
        {touched.punchline && errors.punchline && <p>{errors.punchline}</p>}
        <FormGroup check>
          <Label check>
            <Field
              name="publicJoke"
              type="checkbox"
              checked={values.publicJoke}
            />
            Public
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
  mapPropsToValues({ question, punchline, publicJoke }) {
    return {
      question: question || "",
      punchline: punchline || "",
      publicJoke: publicJoke || true
    };
  },
  validationSchema: Yup.object().shape({
    question: Yup.string().required("QUESTION IS REQUIRED"),
    punchline: Yup.string().required("PUNCHLINE IS REQUIRED")
  }),
  handleSubmit(values, { props }) {
    props.addJoke(values)
    console.log("submitting", values, props);
  }
})(AddJokeForm);
export default connect(null, { addJoke })(FormikAddJokeForm);
