import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, getProfile, savePhoto, toggleIsFetching, updateProfile } from '../../Redux/Profile/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { getProfileFetching, getProfileState } from '../../Redux/Profile/profile-selectors'
import { getAuthorizedId, getIsAuth } from '../../Redux/Auth/auth-selectors'

const refreshProfile = async (id, authorizedUserId, getProfile, getStatus, history) => {
	let userId = id
	if (!userId) {
		userId = authorizedUserId
		if (!userId) {
			history.push('/login')
		}
	}

	await getProfile(userId)
	getStatus(userId)

}

const ProfileContainer = props => {
	const { match, authorizedUserId, getProfile, getStatus } = props

	useEffect(() => {
		props.toggleIsFetching(true)
		refreshProfile(match.params.userId, authorizedUserId, getProfile, getStatus, props.history)
			.then(response => props.toggleIsFetching(false))
	}, [match.params.userId])

	if (props.isFetching) return <Preloader flag={props.isFetching}/>

	return <Profile isOwner={!match.params.userId} {...props}/>
}

let mapStateToProps = (state) => ({
	profile: getProfileState(state),
	//status: state.profilePage.status,
	isFetching: getProfileFetching(state),
	authorizedUserId: getAuthorizedId(state),
	isAuth: getIsAuth(state)
})

export default compose(
	connect(mapStateToProps, { getProfile, updateProfile, getStatus, savePhoto, toggleIsFetching }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)