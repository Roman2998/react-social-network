import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import HeaderLoginContainer from '../HeaderLogin/HeaderLoginContainer'
import HeaderBurger from './HeaderBurger/HeaderBurger'

const Header = (props) => {
  return (
    <header className={`${classes.header} component`}>
      <NavLink to={'/profile'} className={classes.logo}>
        <img alt="logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/>
      </NavLink>

      <div className={classes.headerLogin}>
        <HeaderLoginContainer/>
      </div>

      <HeaderBurger/>
    </header>
  )
}

export default Header