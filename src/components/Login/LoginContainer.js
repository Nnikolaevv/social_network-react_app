import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {sendLoginData} from "../../redux/Reducers/auth-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class LoginContainer extends React.Component {

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    loginData: state.auth.loginData
    }
}


export default compose(
    connect(mapStateToProps, {sendLoginData}),
    withAuthRedirect
)
(LoginContainer)

