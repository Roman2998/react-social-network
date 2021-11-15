import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});


const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <div>Login</div>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <div>Password</div>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password"  />
                        </div>
                        <div>
                            <Field type="checkbox" name="rememberMe"/>remember me
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;