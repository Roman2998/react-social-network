import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, withRouter } from 'react-router-dom'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/App/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import Body from './components/Body/Body'
import Header from './components/Header/Header'


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
				<Header/>
				<Body/>
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

const SamuraiJSApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	</HashRouter>
}
export default SamuraiJSApp;