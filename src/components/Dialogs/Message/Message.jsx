import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={s.message}>
            <img alt="user" src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg"/>
            {props.message}
        </div>
    )
}

export default Message;