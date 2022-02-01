import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 7},
		{id: 2, message: 'It\'s my first post', likesCount: 15},
		{id: 3, message: 'Blala', likesCount: 13},
		{id: 4, message: 'DADA my first post', likesCount: 18},
	]
};

test('length of post should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator("it-Kamasutra")

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
	// 1. test data
	let action = addPostActionCreator("it-Kamasutra")

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts[4].message).toBe("it-Kamasutra");
});

test('after deleting length of message should be decrement', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = profileReducer(initialState, action);

	// 3. expectation
	expect(newState.posts.length).toBe(4);
});