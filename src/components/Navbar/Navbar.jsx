import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
	return <nav className={`component component--sidebar`}>
		<NavLink to="/profile" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			Profile
		</NavLink>
		<NavLink to="/dialogs" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			Messages
		</NavLink>
		<NavLink to="/users" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			Users
		</NavLink>
		<NavLink to="/news" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			News
		</NavLink>
		<NavLink to="/music" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			Music
		</NavLink>
		<NavLink to="/settings" activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
			Settings
		</NavLink>
	</nav>
}

export default Navbar