import React from "react";
import {Formik, Form, Field} from "formik";

const ProfileDataForm = ({profile, saveProfile, setEditMode}) => {
	return (
		<div>
			<Formik
				initialValues={{
					fullName: profile.fullName,
					aboutMe: profile.aboutMe,
					lookingForAJob: profile.lookingForAJob,
					lookingForAJobDescription: profile.lookingForAJobDescription,
					contacts: {
						facebook: profile.contacts.facebook,
						website: profile.contacts.website,
						// vk: profile.contacts.vk,
						// twitter: profile.contacts.twitter,
						// instagram: profile.contacts.instagram,
						// youtube: profile.contacts.youtube,
						// github: profile.contacts.github,
						// mainLink: profile.contacts.mainLink
					}
				}}
				onSubmit={(values, {setSubmitting}) => {
					setTimeout( () => {
						saveProfile(values).then( () => {
							setEditMode(false);
						});
						setSubmitting(false);
					}, 400);

				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div>
							<b>ФИО:</b><Field id="fullName" name="fullName"/>
						</div>
						<div>
							<b>Обо мне:</b><Field id="aboutMe" name="aboutMe"/>
						</div>
						<div>
							<b>Ищу работу:</b><Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
						</div>
						<div>
							<b>Мои профессиональные навыки:</b><Field id="lookingForAJobDescription"
							                                          name="lookingForAJobDescription"/>
						</div>
						<div>
							<b>facebook:</b><Field id="facebook" name="contacts.facebook"/>
						</div>
						<div>
							<b>website:</b><Field id="website" name="contacts.website"/>
						</div>
						<div>
							<b>vk:</b><Field id="vk" name="contacts.vk"/>
						</div>
						<div>
							<b>twitter:</b><Field id="twitter" name="contacts.twitter"/>
						</div>
						<div>
							<b>instagram:</b><Field id="instagram" name="contacts.instagram"/>
						</div>
						<div>
							<b>youtube:</b><Field id="youtube" name="contacts.youtube"/>
						</div>
						<div>
							<b>github:</b><Field id="github" name="contacts.github"/>
						</div>
						<div>
							<b>mainLink:</b><Field id="mainLink" name="contacts.mainLink"/>
						</div>
						<div>
							<button type="submit" disabled={isSubmitting}>Save</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
export default ProfileDataForm;