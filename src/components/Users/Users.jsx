import React from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import avatar from '../../assets/img/ava.jpg'


const Users = (props) => {
    const pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {props.users.map(u => <div key={u.id}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : avatar}
                                    alt=""
                                    className={styles.avaImg}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.unfollow(u.id)}}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.follow(u.id)}}>
                                    Follow
                                < /button>}
                        </div>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                        <div>
                            {'u.location.country'}
                        </div>
                    </div>
                )}
            </div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => props.setPage(p)}
                              className={props.currentPage === p && styles.selectedPage}> {p} </span>
                    )
                })}
            </div>
        </div>
    )
}


export default Users;