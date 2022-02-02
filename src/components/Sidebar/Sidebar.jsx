import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './Sidebar.module.css'
import { getIsShowed } from '../../Redux/Sidebar/sidebar-selectors'
import { toggleIsShowed } from '../../Redux/Sidebar/sidebar-reducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import HeaderLoginContainer from '../HeaderLogin/HeaderLoginContainer'
import { withSuspense } from '../../hoc/withSuspense'
import { Route } from 'react-router-dom'
import DarkMode from '../common/DarkMode/DarkMode'

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'))

const Sidebar = ({ isShowed, toggleIsShowed, ...props }) => {

	const closeSidebar = e => {
		toggleIsShowed(false)
		document.body.style.overflowY = 'unset'
	}

	return (
		<div className={classes.sidebar} data-show={isShowed} onClick={closeSidebar}>
			<Navbar/>
			<Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
			<HeaderLoginContainer className={`component component--sidebar ${classes.sidebarLogin}`}/>
			<DarkMode className={`component component--sidebar ${classes.sidebarDarkMode}`}/>
		</div>
	)
}

const mapStateToProps = state => ({
	isShowed: getIsShowed(state)
})

const mapDispatchToProps = {
	toggleIsShowed
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
)(Sidebar)