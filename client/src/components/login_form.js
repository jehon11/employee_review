import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as api from '../lib/api';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const LoginForm = ({ onLoginSuccess }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        api.login(values)
          .then(onLoginSuccess)
          .catch(error => console.log(error));
      }}
    >
      {({ errors, touched }) => (
        <Form className="login-form">
          <div>
            <Field autoComplete="username" name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
          </div>
          <div>
            <Field autoComplete="new-password" name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
