import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/Reducers/auth-reducer";

class LoginContainer extends React.Component {

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessages: state.auth.errorMessages
    }
}


export default compose(
    connect(mapStateToProps, {login})
)
(LoginContainer)

