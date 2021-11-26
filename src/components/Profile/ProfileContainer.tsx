import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    actions,
    getProfile,
    getStatus,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/Reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {AppStateType} from "../../redux/reduxStore";


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    setUserProfile: () => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (data: Object) => Promise<any>
}

type PathParamsType = {
    userId: string
}


type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        const userId = +this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login')

        this.props.getProfile(userId as number);
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     savePhoto={this.props.savePhoto}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     saveProfile={this.props.saveProfile}
                     initialValues={this.props.profile}
                     isOwner={(!this.props.match.params.userId)}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,

    }
}

const {setUserProfile} = actions

export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
)
(ProfileContainer)

