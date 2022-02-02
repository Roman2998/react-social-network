// import React from "react";
// import {Formik, Form, Field} from "formik";
//
// const ProfileDataForm = ({profile, updateProfile, setEditMode}) => {
// 	return (
// 		<div>
// 			<Formik
// 				initialValues={{
// 					fullName: profile.fullName,
// 					aboutMe: profile.aboutMe,
// 					lookingForAJob: profile.lookingForAJob,
// 					lookingForAJobDescription: profile.lookingForAJobDescription,
// 					contacts: {
// 						facebook: profile.contacts.facebook,
// 						website: profile.contacts.website,
// 						// vk: profile.contacts.vk,
// 						// twitter: profile.contacts.twitter,
// 						// instagram: profile.contacts.instagram,
// 						// youtube: profile.contacts.youtube,
// 						// github: profile.contacts.github,
// 						// mainLink: profile.contacts.mainLink
// 					}
// 				}}
// 				onSubmit={(values, {setSubmitting}) => {
// 					setTimeout( () => {
// 						updateProfile(values).then( () => {
// 							setEditMode(false);
// 						});
// 						setSubmitting(false);
// 					}, 400);
//
// 				}}
// 			>
// 				{({isSubmitting}) => (
// 					<Form>
// 						<div>
// 							<b>ФИО:</b><Field id="fullName" name="fullName"/>
// 						</div>
// 						<div>
// 							<b>Обо мне:</b><Field id="aboutMe" name="aboutMe"/>
// 						</div>
// 						<div>
// 							<b>Ищу работу:</b><Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
// 						</div>
// 						<div>
// 							<b>Мои профессиональные навыки:</b><Field id="lookingForAJobDescription"
// 							                                          name="lookingForAJobDescription"/>
// 						</div>
// 						<div>
// 							<b>facebook:</b><Field id="facebook" name="contacts.facebook"/>
// 						</div>
// 						<div>
// 							<b>website:</b><Field id="website" name="contacts.website"/>
// 						</div>
// 						<div>
// 							<b>vk:</b><Field id="vk" name="contacts.vk"/>
// 						</div>
// 						<div>
// 							<b>twitter:</b><Field id="twitter" name="contacts.twitter"/>
// 						</div>
// 						<div>
// 							<b>instagram:</b><Field id="instagram" name="contacts.instagram"/>
// 						</div>
// 						<div>
// 							<b>youtube:</b><Field id="youtube" name="contacts.youtube"/>
// 						</div>
// 						<div>
// 							<b>github:</b><Field id="github" name="contacts.github"/>
// 						</div>
// 						<div>
// 							<b>mainLink:</b><Field id="mainLink" name="contacts.mainLink"/>
// 						</div>
// 						<div>
// 							<button type="submit" disabled={isSubmitting}>Save</button>
// 						</div>
// 					</Form>
// 				)}
// 			</Formik>
// 		</div>
// 	)
// }
// export default ProfileDataForm;

import React from "react";
import {Form, Field} from "react-final-form";
import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {required, composeValidators} from "../../../../utils/validators/validators";
import Button from "../../../common/Button/Button";
import classes from "./ProfileDataForm.module.css";

const ProfileDataForm = props =>
	<Form onSubmit={props.onSubmit} initialValues={props.initialValues} profile={props.profile}>
		{({handleSubmit, profile, error}) => (
			<form onSubmit={handleSubmit}>
				<div className={classes.form}>
					<label>
						<h2>FullName</h2>
						<Field placeholder={"FullName"} name={"fullName"}
							   validate={composeValidators(required)} component={Input} type={"text"}/>
					</label>
					<label>
						<h2>About Me</h2>
						<Field placeholder={"About me"} name={"aboutMe"} component={Textarea}/>
					</label>
					<div>
						<div className={classes.lookingForAJob}>
							<label className={classes.lookingForAJobCheckbox}>
								<h2>Looking for a job?</h2>
								<Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
							</label>
							<label htmlFor={"lookingForAJobDescription"}>
								<h2>Description for a looking job</h2>
							</label>
						</div>
						<Field placeholder={"Description for a looking job"} name={"lookingForAJobDescription"}
							   component={Textarea} id={"lookingForAJobDescription"}/>
					</div>
					<div>
						<h2>Contacts</h2>
						<div>
							{Object.keys(profile.contacts).map(key => {
								return <label className={classes.contactItem} key={key}>
									<strong className={classes.contactItemTitle}>{key}</strong>
									<Field name={`contacts.${key}`} component={Input} type={"text"}
										   placeholder={`https://${key}/`}/>
								</label>
							})}
						</div>
					</div>
				</div>
				{error
					? <div>{error}</div>
					: ""
				}
				<Button>Save changes</Button>
			</form>
		)}

	</Form>

export default ProfileDataForm;
