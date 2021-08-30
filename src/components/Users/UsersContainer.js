import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    getUsersAC,
    setCurrentPageAC,
    setUsersCountAC,
    toggleFetchingAC,
    unFollowAC
} from "../../redux/Reducers/users-reducer";
import * as axios from "axios";
import preloader from "../../assets/img/preloader.gif"
import Preloader from "../common/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.toggleFetching(false)
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
        this.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.toggleFetching(false)
            this.props.getUsers(response.data.items)
            })
            .catch(err => console.log(err));
    }

    toggleFetching = (booleanOfFetching) => {
        this.props.toggleFetching(booleanOfFetching)
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setPage={this.setPage}
                       follow={this.follow}
                       unfollow={this.unfollow}
                /></>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
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
        toggleFetching: (booleanOfFetching) => {
            dispatch(toggleFetchingAC(booleanOfFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

