import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Preloader from '../common/Preloader/Preloader'
import ProfileDataForm from './ProfileInfo/ProfileDataForm/ProfileDataForm'
import Button from '../common/Button/Button'
import classes from './Profile.module.css'
import PostsContainer from './MyPosts/PostsContainer'

const Profile = ({ isOwner, profile, ...props }) => {
	const [editMode, setEditMode] = useState(false)

	const activateEditMode = () => {
		if (isOwner) setEditMode(true)
	}

	const deActivateMode = formData => {
		props.updateProfile(formData)
			.then(() => setEditMode(false))
	}

	if (!profile) return <Preloader/>

	return (
		<div className={`component--wrap`}>
			{!editMode
				? <ProfileInfo isOwner={isOwner} profile={profile} savePhoto={props.savePhoto}
							   updateProfile={props.updateProfile}/>
				: <ProfileDataForm onSubmit={deActivateMode} profile={profile} initialValues={profile}/>}
			{!editMode && isOwner
				? <Button className={classes.buttonEditMode} attr={{ 'onClick': activateEditMode }}>Edit
					profile</Button>
				: ''}
			<PostsContainer/>
		</div>
	)
}
export default Profile