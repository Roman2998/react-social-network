import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import classes from './Users.module.css';
import Preloader from '../common/Preloader/Preloader'

let Users = (props) => {
	return <div className={`${classes.usersWrap} component--wrap`}>
		<Preloader flag={props.isFetching}/>

		{props.users.map(u => <User key={u.id} user={u} {...props}/>)}

		<Paginator {...props}/>
	</div>
}
export default Users;