import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    toggleFollowingProgress,
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



class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsersList(this.props.currentPage, this.props.pageSize)
    };

    setPage = (numberPage) => {
        this.props.changePage(numberPage, this.props.pageSize)

    };

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setPage={this.setPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingInProgress={this.props.toggleFollowingProgress}
                       isAuth={this.props.isAuth}
                />
            </div>
            
        )
    };
}


const mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsersList: requestUsers,
        changePage,

    }),
    )(UsersContainer)



