const TOGGLE_IS_SHOWED = "TOGGLE-IS-SHOWED";

let initialState = {
	friends: [
		{id: 1, name: 'Dimych'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Roman'}
	],
	isShowed: false
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_SHOWED:
			return {
				...state,
				isShowed: action.isShowed
			}
		default:
			return state;
	}
}

export const toggleIsShowed = isShowed => ({type: TOGGLE_IS_SHOWED, isShowed});

export default sidebarReducer;