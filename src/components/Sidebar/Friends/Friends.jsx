import React from "react";
import s from "./Friends.module.css"

const Friends = (props) => {
	return (
		<div className={s.item}>
			<img src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg"/>
			<a>{props.name}</a>
		</div>
	)
}
export default Friends;