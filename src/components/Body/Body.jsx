import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Body.module.css'

const Body = (props) => {
  return (
    <div className={classes.body}>
      <Sidebar/>
      <Content/>
    </div>
  )
}
export default Body;