import React from "react";
import {login} from "../../Redux/Auth/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";


const Login = ({isAuth, loginSuccess, error, login, ...props}) => {
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <LoginForm login={login} loginSuccess={loginSuccess}
                      error={error} captchaUrl={props.captchaUrl}/>
}
const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    loginSuccess: state.auth.loginSuccess,
    error: state.auth.error
})

export default connect(mapStateToProps, {login})(Login);