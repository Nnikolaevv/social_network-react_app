import React from "react";
import './Users.module.css'
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/ava.jpg'

const User = (props) => {
    const user = props.user
    return (
        <div>
            <div>
                <div key={props.key}>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                src={user.photos.small != null ? user.photos.small : avatar}
                                alt=""
                                className='avaImg'/>
                        </NavLink>

                    </div>
                    {props.isAuth ? <div>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }}>
                                Unfollow
                            </button> :
                            <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.follow(user.id)
                                    }}>
                                Follow
                            < /button>}
                    </div> : null}
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                    <div>
                        {'user.location.country'}
                    </div>
                </div>
            </div>

        </div>
    )
}


export default User;