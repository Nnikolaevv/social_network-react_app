import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    changePage,
} from "../../redux/Reducers/users-reducer";
import Preloader from "../common/Preloader";





class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    setPage = (numberPage) => {
        this.props.changePage(numberPage, this.props.pageSize)

    };

    render() {
        return (
            <>
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
                /></>
            
        )
    };
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    changePage,

})(UsersContainer);

