import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
       this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }


}



export default connect(mapStateToProps, {setUserProfile, getProfile})(withRouter(ProfileContainer))
