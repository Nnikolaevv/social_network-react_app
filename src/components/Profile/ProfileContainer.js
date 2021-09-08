import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/Reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19347;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)
(ProfileContainer)

