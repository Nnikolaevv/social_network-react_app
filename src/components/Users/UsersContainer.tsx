import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    requestUsers,
    changePage,
} from "../../redux/Reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsersSuper
} from "../../redux/Selectors/users-selector";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    totalUserCount: number
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUsersList: (currentPage: number, pageSize: number) => void
    changePage: (numberPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type OwnPropsType = {
    title: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType &  OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersList(currentPage, pageSize)
    };

    setPage = (numberPage: number) => {
        const {pageSize} = this.props
        this.props.changePage(numberPage, pageSize)
    };


    render() {
        if (this.props.isFetching) return <Preloader/>

        return (
            <Users {...this.props}
                   setPage={this.setPage}
            />
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {
            follow,
            unfollow,
            getUsersList: requestUsers,
            changePage,
        }),
)(UsersContainer)



