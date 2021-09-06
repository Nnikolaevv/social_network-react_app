import React from "react";
import Header from "./Header";
import {authOnLoad} from "../../redux/Reducers/auth-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authOnLoad()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        loginUser: state.auth.loginUser,
    }
}

export default connect(mapStateToProps, {authOnLoad})(withRouter(HeaderContainer))