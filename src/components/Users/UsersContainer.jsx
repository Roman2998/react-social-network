import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import {
	follow, setCurrentPage, unfollow,
	toggleFollowingProgress, requestUsers
} from '../../Redux/Users/users-reducer';
import Users from './Users';
import {compose} from "redux";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers
} from "../../Redux/Users/users-selectors";
import { getIsAuth } from '../../Redux/Auth/auth-selectors'


const UsersContainer = props => {
	useEffect(() => {
		const {currentPage, pageSize} = props
		props.getUsers(currentPage, pageSize);
	}, [props.currentPage])

	return <Users {...props}/>
}


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state)
	}
}

export default compose(
	connect(mapStateToProps, {follow, unfollow, setCurrentPage,
		toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer);