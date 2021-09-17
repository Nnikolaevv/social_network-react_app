import React from "react";
import './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {
    return (
        <div>
            <div>
                {props.users.map(u => <User key={u.id}
                                            user={u}
                                            isAuth={props.isAuth}
                                            followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                />)}
            </div>
            <Paginator currentPage={props.currentPage}
                       totalItemsCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       setPage={props.setPage}/>
        </div>
    )
}


export default Users;