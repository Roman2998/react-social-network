import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
    <div>
        {/*<div>
            <img src='https://www.thoughtco.com/thmb/yrUTNF8_tRuGkw6_PGnrmImiy_I=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-exotic-holiday-248797-50a4923893ab4eddb49a5df232a33069.jpg' />
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <p>Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : "Пусто"}</p>
            <p>Мои контакты:</p>
            <p>facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : "Пусто"}</p>
            <p>website: {props.profile.contacts.website ? props.profile.contacts.website : "Пусто"}</p>
            <p>vk: {props.profile.contacts.vk ? props.profile.contacts.vk : "Пусто"}</p>
            <p>twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : "Пусто"}</p>
            <p>instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : "Пусто"}</p>
            <p>youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : "Пусто"}</p>
            <p>github: {props.profile.contacts.github ? props.profile.contacts.github : "Пусто"}</p>
            <p>mainLink: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "Пусто"}</p>
            <p>Ищу работу: {props.profile.lookingForAJob ? "да" : "нет"}</p>
            <p>Ищу работу описание: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "Пусто"}</p>
            <p>ФИО: {props.profile.fullName ? props.profile.fullName : "Пусто"}</p>
        </div>
    </div>
    )
}

export default ProfileInfo;