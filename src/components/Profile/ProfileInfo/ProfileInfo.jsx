import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src='https://www.thoughtco.com/thmb/yrUTNF8_tRuGkw6_PGnrmImiy_I=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-exotic-holiday-248797-50a4923893ab4eddb49a5df232a33069.jpg' />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;