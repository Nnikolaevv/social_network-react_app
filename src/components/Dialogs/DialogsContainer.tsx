import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {actions, DialogType, MessageType} from "../../redux/Reducers/dialogs-reducer";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    dialogs: Array<DialogType>
    incomeMessages: Array<MessageType>
    outcomeMessages: Array<MessageType>
    sendMsg: (message: string) => void
}

class DialogsContainer extends React.Component<PropsType> {
    render() {
        return (
            <Dialogs dialogs={this.props.dialogs}
                     incomeMessages={this.props.incomeMessages}
                     outcomeMessages={this.props.outcomeMessages}
                     sendMsg={this.props.sendMsg}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        incomeMessages: state.dialogsPage.incomeMessages,
        outcomeMessages: state.dialogsPage.outcomeMessages,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMsg: actions.sendMsg}),
    withAuthRedirect)
(DialogsContainer)
