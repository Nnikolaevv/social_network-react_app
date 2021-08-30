import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, setCurrentPageAC, setUsersCountAC, unFollowAC} from "../../redux/Reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            console.log('from cont', userId)
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            console.log('from cont', userId)
            dispatch(unFollowAC(userId));
        },
        getUsers: (users) => {
            dispatch(getUsersAC(users));
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;