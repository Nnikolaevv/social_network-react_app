import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    setCurrentPage,
    setUsersCount,
    toggleFetching,
    unfollow,
} from "../../redux/Reducers/users-reducer";
import * as axios from "axios";
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



export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    setCurrentPage,
    setUsersCount,
    toggleFetching,
})(UsersContainer);

