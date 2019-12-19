import React, {useState, useEffct} from 'react';
import {withFormik, Form, Field} from formik;
import * as Yup from 'yup';
import axios from 'axios';

const SignForm = ({values, errors, touched, status}) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touced);
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("status has changed!", status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div>
            <Form>
                <Field type="text" name ="username" placeholder="User Name" />
                {touched.username && errors.username && (
<p>{errors.username}</p>
                )}
                <Field type="email" name ="email" placeholder="Email" />
                {touched.email && errors.email && (
<p>{errors.email}</p>
                )}
            </Form>
        </div>
    )
}


export default FormikSignUpForm