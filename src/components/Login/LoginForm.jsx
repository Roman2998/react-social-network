import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from "yup";
import {Button, Checkbox, Grid} from "@mui/material";
import {MyTextField} from "../common/FormsControls/FormsControls";
import s from "./LoginForm.module.css"

const SignupSchema = Yup.object().shape({
	email: Yup.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: Yup.string()
		.min(2, 'Password should be of minimum 2 characters length')
		.max(50, 'Password should be of maximum 50 characters length')
		.required('Password is required'),
});

const LoginForm = ({login, loginSuccess, error, captchaUrl }) => {
	return (
		<div>
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: false,
				}}
				validationSchema={SignupSchema}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						login(values.email, values.password, values.rememberMe, values.captcha);
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{() => (
					<Form>
						<Grid className={s.grid}>
							<h1>Login</h1>
							{loginSuccess ? "" : <a>{error}</a>}


							<Grid item xs={12}>
								<MyTextField name="email" label="Email"/>
							</Grid>
							<Grid item xs={12}>
								<MyTextField name="password" type="password" label="Password"/>
							</Grid>
							<Grid item xs={12}>
								<Checkbox name="rememberMe" type="checkbox"/>rememberMe
							</Grid>
							<Grid item>
								{captchaUrl && <img src={captchaUrl}/> }
							</Grid>
							<Grid item>
								{captchaUrl && <MyTextField name="captcha"/>}
							</Grid>
							<Grid item xs={12}>
								<Button type="submit" variant="contained">Submit</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</div>
	)
}
export default LoginForm;