import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img alt="user" src={profile.photos.large || userPhoto} className={s.userPhoto}/>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
				{editMode
					? <ProfileDataForm profile={profile} saveProfile={saveProfile} setEditMode={setEditMode} />
					: <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
			</div>
		</div>
	)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return <div>
		{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
		<div>
			<b>ФИО:</b> {profile.fullName || "Пусто"}
		</div>
		<div>
			<b>Обо мне:</b> {profile.aboutMe || "Пусто"}
		</div>
		<div>
			<b>Ищу работу:</b> {profile.lookingForAJob ? "да" : "нет"}
		</div>
		<div>
			<b>Мои профессиональные навыки:</b> {profile.lookingForAJobDescription || "Пусто"}
		</div>
		<div>
			<b>Мои контакты:</b> {Object.keys(profile.contacts).map(key => {
			return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
		})}
		</div>
	</div>
}

const Contact = ({contactTitle, contactValue }) => {
	return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}


export default ProfileInfo;