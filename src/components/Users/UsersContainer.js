import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersAC, setCurrentPageAC, setUsersCountAC, unFollowAC} from "../../redux/Reducers/users-reducer";
import * as axios from "axios";



class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.getUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
            .catch(err => console.log(err));
    }

    follow = (id) => {
        this.props.follow(id)
    };

    unfollow = (id) => {
        this.props.unfollow(id)
    };

    setPage = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => this.props.getUsers(response.data.items))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Users users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setPage={this.setPage}
                   follow={this.follow}
                   unfollow={this.unfollow}
            />
        )
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

