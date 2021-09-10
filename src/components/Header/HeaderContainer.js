import React from "react";
import Header from "./Header";
import {logout} from "../../redux/Reducers/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

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
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)