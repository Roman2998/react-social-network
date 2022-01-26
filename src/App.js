import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		//alert("Some error occurred");
		//console.error(promiseRejectionEvent);
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}


	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Switch>
							<Route path={`/`} exact
							       render={() => <Redirect to={"/profile"}/>}/>
							<Route path='/dialogs'
							       render={withSuspense(DialogsContainer)}/>
							<Route path='/profile/:userId?'
							       render={withSuspense(ProfileContainer)}/>
							<Route path='/users'
							       render={withSuspense(UsersContainer)}/>
							<Route path='/login'
							       render={withSuspense(LoginPage)}/>
							<Route path='/news'
							       render={() => <News/>}/>
							<Route path='/music' component={Music}/>
							<Route path='/settings' component={Settings}/>
							<Route path='*' render={() => <div>404 NOT FOUND</div>}/>
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</BrowserRouter>
}
export default SamuraiJSApp;