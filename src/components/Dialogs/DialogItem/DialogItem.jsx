import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            {name}
        </NavLink>
    )
}

export default DialogItem;