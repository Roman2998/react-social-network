import { sendMessageTC } from '../../Redux/Dialogs/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { getDialogsPage } from '../../Redux/Dialogs/dialogs-selectors'

const mapStateToProps = state => ({dialogsPage: getDialogsPage(state)});

const mapDispatchToProps = {sendMessageTC}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);