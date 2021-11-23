import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});


const LoginForm = ({login}) => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                validationSchema={SignupSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        login(values.email, values.password, values.rememberMe);
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

const Login = ({isAuth, loginSuccess, error, login }) => {
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        {loginSuccess ? "" : <span>{error}</span>}
        <LoginForm login={login}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginSuccess: state.auth.loginSuccess,
    error: state.auth.error
})

export default connect(mapStateToProps, {login})(Login);