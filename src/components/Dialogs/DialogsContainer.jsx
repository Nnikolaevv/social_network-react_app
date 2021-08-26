import React from "react";
import {sendMsgActionCreator, updateMsgTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";



// const DialogsContainer = (props) => {
//     const state = props.store.getState();
//     const dialogs = state.dialogsPage.dialogs;
//     const newMsgText = state.dialogsPage.newMsgText
//     const incomeMessages = state.dialogsPage.incomeMessages;
//     const outcomeMessages = state.dialogsPage.outcomeMessages;
//     const dispatch = props.store.dispatch;
//
//     const sendMsg = () => {
//         dispatch(sendMsgActionCreator());
//     };
//
//     const updateMsgText = (inputMsg) => {
//         dispatch(updateMsgTextActionCreator(inputMsg))
//     };
//
//     return (
//       <Dialogs dialogs={dialogs}
//                newMsgText={newMsgText}
//                incomeMessages={incomeMessages}
//                outcomeMessages={outcomeMessages}
//                sendMsg={sendMsg}
//                updateMsgText={updateMsgText}/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newMsgText: state.dialogsPage.newMsgText,
        incomeMessages: state.dialogsPage.incomeMessages,
        outcomeMessages: state.dialogsPage.outcomeMessages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(sendMsgActionCreator())
        },
        updateMsgText: (inputMsg) => {
            dispatch(updateMsgTextActionCreator(inputMsg))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
