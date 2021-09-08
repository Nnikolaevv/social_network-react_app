import React from "react";
import {sendMsg} from "../../redux/Reducers/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



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


export default compose(
    connect(mapStateToProps, {sendMsg}),
    withAuthRedirect)
(DialogsContainer)
