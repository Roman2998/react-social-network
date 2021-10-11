import React from "react";
import Friends from "./Friends/Friends";


const Sidebar = (props) => {
	let sidebarElements = props.friends
		.map(f => <Friends name={f.name}/>)
	return (
		<div>
			{sidebarElements}
		</div>
	)
}
export default Sidebar;