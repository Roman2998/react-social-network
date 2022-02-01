import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Profile/profile-reducer";
import dialogsReducer from "./Dialogs/dialogs-reducer";
import sidebarReducer from "./Sidebar/sidebar-reducer";
import usersReducer from "./Users/users-reducer";
import authReducer from "./Auth/auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./App/app-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;