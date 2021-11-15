import React from "react";
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      // updateNewMessageBody: (body) => {
      //     dispatch(updateNewMessageBodyCreator(body));
      // },
      sendMessage: (newMessageBody) => { //add newMessageBody
          dispatch(sendMessageCreator(newMessageBody)); //add newMessageBody
      }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Dialogs);