import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {actions} from "../../redux/Reducers/dialogs-reducer";


class DialogsContainer extends React.Component {

    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        incomeMessages: state.dialogsPage.incomeMessages,
        outcomeMessages: state.dialogsPage.outcomeMessages,
    }
}

const {sendMsg} = actions

export default compose(
    connect(mapStateToProps, {sendMsg}),
    withAuthRedirect)
(DialogsContainer)
