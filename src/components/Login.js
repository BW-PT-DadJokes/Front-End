import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "reactstrap";
import { connect, useSelector } from "react-redux";

// LOGIN ACTIONS
import { login } from "../actions/actions";

const LoginForm = ({ values, errors, touched, status }) => {
  /*console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);*/

  return (
    <div className="user-form">
      <Form>
        <h1>Login</h1>
        <Field type="text" name="username" placeholder="User Name" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Button type="submit">Submit</Button>
      </Form>

      {/*users.map(user => {
        return (
          <ul key={user.id}>
            <li>UserName: {user.username}</li>
          </ul>
        );
      })*/}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("USER NAME IS REQUIRED"),
    password: Yup.string().required("PASSWORD IS REQUIRED")
  }),
  handleSubmit(values, { props }) {
    console.log("submitting", values, props);
    props.login(values);
  }
})(LoginForm);

export default connect(
  null,
  { login }
)(FormikLoginForm);
