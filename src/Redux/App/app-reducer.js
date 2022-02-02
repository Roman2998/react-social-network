import {getAuthUserData} from "../Auth/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const HAS_ERROR = 'HAS-ERROR';

let initialState = {
	initialized: false,
	errorData: {
		hasError: false,
		errorMessage: null
	}
};

const appReducer = (state = initialState, action) => {

	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		case HAS_ERROR:
			return {
				...state,
				errorData: {...action.payload}
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const toggleHasError = (errorData = [false, null]) => ({
	type: HAS_ERROR,
	payload: {hasError: errorData[0], errorMessage: errorData[1]}
});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		});

}

export default appReducer;