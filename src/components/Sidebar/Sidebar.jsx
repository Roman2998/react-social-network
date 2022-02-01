import Navbar from '../Navbar/Navbar'
import classes from './Sidebar.module.css'
import { getIsShowed } from '../../Redux/Sidebar/sidebar-selectors'
import { toggleIsShowed } from '../../Redux/Sidebar/sidebar-reducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import HeaderLoginContainer from '../HeaderLogin/HeaderLoginContainer'

const Sidebar= ({isShowed, toggleIsShowed, ...props}) => {

  const closeSidebar = e => {
    toggleIsShowed(false);
    document.body.style.overflowY = "unset";
  };

  return (
    <div className={classes.sidebar} data-show={isShowed} onClick={closeSidebar}>
      <Navbar/>
      <HeaderLoginContainer className={`component component--sidebar ${classes.sidebarLogin}`}/>
    </div>
  )
}

const mapStateToProps = state => ({
  isShowed: getIsShowed(state)
})

const mapDispatchToProps = {
  toggleIsShowed
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);