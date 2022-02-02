import {compose} from "redux";
import {connect} from "react-redux";
import {updateStatus} from "../../../../../Redux/Profile/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {withRouter} from "react-router-dom";
import { getProfileStatus } from '../../../../../Redux/Profile/profile-selectors'

const mapStateToProps = state => ({
	status: getProfileStatus(state),
})

const mapDispatchToProps = {updateStatus}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(ProfileStatus);
