import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, updateStatus, status}) => {

    if (!profile) {
        return <Preloader />
    }
    const contacts = profile.contacts;

    return (
    <div>
        <div className={s.descriptionBlock}>
            <img alt="user" src={profile.photos.large != null ? profile.photos.large : userPhoto} className={s.userPhoto}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <p>Обо мне: {profile.aboutMe ? profile.aboutMe : "Пусто"}</p>
            <p>Мои контакты:</p>
            <p>facebook: {contacts.facebook ? contacts.facebook : "Пусто"}</p>
            <p>website: {contacts.website ? contacts.website : "Пусто"}</p>
            <p>vk: {contacts.vk ? contacts.vk : "Пусто"}</p>
            <p>twitter: {contacts.twitter ? contacts.twitter : "Пусто"}</p>
            <p>instagram: {contacts.instagram ? contacts.instagram : "Пусто"}</p>
            <p>youtube: {contacts.youtube ? contacts.youtube : "Пусто"}</p>
            <p>github: {contacts.github ? contacts.github : "Пусто"}</p>
            <p>mainLink: {contacts.mainLink ? contacts.mainLink : "Пусто"}</p>
            <p>Ищу работу: {profile.lookingForAJob ? "да" : "нет"}</p>
            <p>Ищу работу описание: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "Пусто"}</p>
            <p>ФИО: {profile.fullName ? profile.fullName : "Пусто"}</p>
        </div>
    </div>
    )
}

export default ProfileInfo;