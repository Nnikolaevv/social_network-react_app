import React from "react";
import {logout} from "../../redux/Reducers/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../types/types";

type MapPropsType = {
    isAuth: boolean
    profileAva: ProfileType
}

type DispatchPropsType = {
    logout: () => void
}

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    profileAva={this.props.profileAva}
                    logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        profileAva: state.profilePage.profile
    } as MapPropsType
}

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)