import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "reactstrap";

const SignForm = ({ values, errors, touched, status }) => {
  console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <h1>Sign up Form</h1>
        <Field type="text" name="username" placeholder="User Name" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Button type="submit">Submit</Button>
      </Form>

      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>UserName: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues(props) {
    return {
      user: props.users || "",
      email: props.email || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("USER NAME IS REQUIRED"),
    email: Yup.string().required("EMAIL IS REQUIRED"),
    password: Yup.string().required(
      "PASSWORD IS REQUIRED HOW DO YOU EXPECT TO LOGIN IN?"
    )
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err));
  }
})(SignForm);

export default FormikSignUpForm;
