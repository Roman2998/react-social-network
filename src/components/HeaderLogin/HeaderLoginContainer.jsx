import HeaderLogin from './HeaderLogin'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getAuthLogin, getIsAuth } from '../../Redux/Auth/auth-selectors'
import { logout } from '../../Redux/Auth/auth-reducer'

const HeaderLoginContainer = props => <HeaderLogin {...props} />

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  login: getAuthLogin(state)
})

const mapDispatchToProps = {
  logout
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderLoginContainer);
