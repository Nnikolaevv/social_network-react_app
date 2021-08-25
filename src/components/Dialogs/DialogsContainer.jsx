import React from "react";
import {sendMsgActionCreator, updateMsgTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    const state = props.store.getState();
    const dialogs = state.dialogsPage.dialogs;
    const newMsgText = state.dialogsPage.newMsgText
    const incomeMessages = state.dialogsPage.incomeMessages;
    const outcomeMessages = state.dialogsPage.outcomeMessages;
    const dispatch = props.store.dispatch;

    const sendMsg = () => {
        dispatch(sendMsgActionCreator());
    };

    const updateMsgText = (inputMsg) => {
        dispatch(updateMsgTextActionCreator(inputMsg))
    };

    return (
      <Dialogs dialogs={dialogs}
               newMsgText={newMsgText}
               incomeMessages={incomeMessages}
               outcomeMessages={outcomeMessages}
               sendMsg={sendMsg}
               updateMsgText={updateMsgText}/>
    )
};

export default DialogsContainer
