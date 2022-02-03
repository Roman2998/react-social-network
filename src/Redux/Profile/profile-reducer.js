import { profileAPI, usersAPI } from '../../api/api'
import { reset, stopSubmit } from 'redux-form'
import { toggleHasError } from '../App/app-reducer'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	posts : [
		{id: 1, post: 'Hi, how are you?', likesCount:7},
		{id: 2, post: 'It\'s my first post', likesCount:15},
		{id: 3, post: 'Blala', likesCount:13},
		{id: 4, post: 'DADA my first post', likesCount:18},
	],
	profile: null,
	status: null,
	isFetching: false
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				post: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {...state.profile, photos:action.photos}
			}
		}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		default:
			return state;
	}
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const addPost = (newPostText) => ({ type: ADD_POST , newPostText}) //add newPostText
export const deletePost = (postId) => ({ type: DELETE_POST , postId})
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS , photos})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export const addPostTC = newPost => dispatch => {
	dispatch(addPost(newPost));
	dispatch(reset('postForm'));
}

export const getProfile = (userId) => async (dispatch) => {
	try {
	let response = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(response.data));
	} catch (e) {
		let msg = e.response.data.message;
		if (e.response.status >= 400 && e.response.status <= 500) {
			msg = "User is not exist";
		}
		dispatch(toggleHasError([true, msg]));
	}
}

export const getStatus = (userId) => async (dispatch) => {
	const data = await profileAPI.getStatus(userId);
	dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
	try {
		let data = await profileAPI.updateStatus(status)
		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	} catch (error) {
		// some error
	}

}
export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const updateProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.id;
	const data = await profileAPI.updateProfile(profile);

	if (data.resultCode === 0) {
		dispatch(getProfile(userId));
	} else {
		dispatch(stopSubmit("editProfile", {_error: data.messages[0]}));
		return Promise.reject(data.messages[0]);
	}
};


export default profileReducer;