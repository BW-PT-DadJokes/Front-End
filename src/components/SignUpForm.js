import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import { connect, useSelector } from "react-redux";

// ACTIONS
import { register } from "../actions/signUpAction";

const SignForm = ({ values, errors, touched, status }) => {

  return (
    <div className="user-form">
      <Form>
        <h1>Sign up Form</h1>
        <Field
          type="text"
          name="username"
          placeholder="User Name"
          component={ReactstrapInput}
        />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field
          type="password"
          name="password"
          placeholder="password"
          component={ReactstrapInput}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("USER NAME IS REQUIRED"),
    password: Yup.string().required(
      "PASSWORD IS REQUIRED HOW DO YOU EXPECT TO LOGIN IN?"
    )
  }),
  handleSubmit(values, { props }) {
    console.log("submitting", values, props);
    props.register(values, props.history);
  }
})(SignForm);

export default connect(null, { register })(FormikSignUpForm);
