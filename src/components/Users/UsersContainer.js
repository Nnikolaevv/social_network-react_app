import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, unFollowAC} from "../../redux/Reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;