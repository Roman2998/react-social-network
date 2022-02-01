import classes from "./HeaderLogin.module.css";
import { NavLink } from 'react-router-dom'
import Button from '../common/Button/Button'

const HeaderLogin = ({isAuth, login, logout, ...props}) => {
  const className = props.className ? props.className : ""

  return (
    <div className={`${classes.login} ${className}`}>
      {isAuth
        ? <div className={classes.loginUser}>
          <NavLink to={"/profile"} className={classes.loginInfo}>{login}</NavLink>
          <Button attr={{"onClick": logout}}>Log Out</Button>
        </div>
        : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>
      }
    </div>
  )
}

export default HeaderLogin;