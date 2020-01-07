import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "reactstrap";

const AddJokeForm = ({ values, errors, touched, status }) => {
  // console.log("values", values);
  // console.log("errors", errors);
  // console.log("touched", touched);

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // console.log("status has changed!", status);
    status && setJokes(jokes => [...jokes, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <h1>Add A Joke</h1>
        <textarea type="textarea" name="question" placeholder="Question" />
        {touched.question && errors.question && <p>{errors.question}</p>}
        <textarea type="textarea" name="punchline" placeholder="Punch line" />
        {touched.punchline && errors.punchline && <p>{errors.punchline}</p>}

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
  mapPropsToValues(props) {
    return {
      queston: props.questions || "",
      punchline: props.punchline || ""
    };
  },
  validationSchema: Yup.object().shape({
    queston: Yup.string().required("QUESTION IS REQUIRED"),
    punchline: Yup.string().required("PUNCHLINE IS REQUIRED")
  }),
  handleSubmit(values, { props }) {
    console.log("submitting", values, props);
    props.register(values);
  }
})(AddJokeForm);

export default FormikAddJokeForm;
// export default connect(null, { register })(FormikSignUpForm);
