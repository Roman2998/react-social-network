import { Redirect, Route, Switch } from 'react-router-dom'
import { withSuspense } from '../../hoc/withSuspense'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
import React from 'react'
import classes from './Content.module.css'

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('../Users/UsersContainer'));
const LoginPage = React.lazy(() => import('../Login/Login'));

const Content = (props) => {
  return (
    <div className={`${classes.content} component`}>
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
  )
}
export default Content;