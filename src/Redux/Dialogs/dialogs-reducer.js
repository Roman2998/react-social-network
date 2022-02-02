import { reset } from 'redux-form'

const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Roman' }
	],
	messages: [
		{ id: 1, message: 'Hey', mine: false },
		{ id: 2, message: 'Yo', mine: false },
		{ id: 3, message: 'What\'s up bro?', mine: false },
		{ id: 4, message: 'Yo', mine: true },
		{ id: 5, message: 'Nothing much', mine: true },
		{ id: 6, message: 'Just getting ready for graduation', mine: true }
	],
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			const newMessage = {
				id: 7,
				message: action.message,
				mine: true
			};

			return {
				...state,
				messages: [...state.messages, {...newMessage}],
			};
		default:
			return state;
	}
}

export const sendMessage = message => ({type: SEND_MESSAGE, message});

export const sendMessageTC = message => dispatch => {
	dispatch(sendMessage(message));
	dispatch(reset("dialogAddMessageForm"));
}

export default dialogsReducer;