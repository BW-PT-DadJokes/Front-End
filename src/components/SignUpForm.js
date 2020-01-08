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
  // console.log("values", values);
  // console.log("errors", errors);
  // console.log("touched", touched);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // console.log("status has changed!", status);
  //   status && setUsers(users => [...users, status]);
  // }, [status]);

  // console.log(users)

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
        {/* <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>} */}
        <Field
          type="password"
          name="password"
          placeholder="password"
          component={ReactstrapInput}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Button type="submit">Submit</Button>
      </Form>

      {/* {users.map(user => {
        return (
          <ul key={user.id}>
            <li>UserName: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })} */}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      // email: props.email || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("USER NAME IS REQUIRED"),
    // email: Yup.string().required("EMAIL IS REQUIRED"),
    password: Yup.string().required(
      "PASSWORD IS REQUIRED HOW DO YOU EXPECT TO LOGIN IN?"
    )
  }),
  handleSubmit(values, { props }) {
    console.log("submitting", values, props);
    props.register(values);
  }
})(SignForm);

export default connect(null, { register })(FormikSignUpForm);
