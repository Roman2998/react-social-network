import {authAPI} from "../api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_LOGIN_SUCCESS = 'samurai-network/auth/SET_LOGIN_SUCCESS';

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	loginSuccess: true,
	error: ""
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		case SET_LOGIN_SUCCESS:
			return {
				...state,
				loginSuccess: action.loginSuccess,
				error: action.error
			}
		default:
			return state;
	}
}

export const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_USER_DATA,
	payload: {id, login, email, isAuth}
})

const setLoginSuccess = (loginSuccess, error) => ({type: SET_LOGIN_SUCCESS, loginSuccess, error})

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let {id, login, email} = response.data.data;
		dispatch(setAuthUserData(id, login, email, true))
	}
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(setLoginSuccess(true))
		dispatch(getAuthUserData())
	} else {
		dispatch(setLoginSuccess(false, response.data.messages[0]))
	}
}

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer;