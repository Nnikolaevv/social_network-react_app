import React from "react";
import styles from './users.module.css'
import * as axios from "axios";


const UsersF = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => props.getUsers(response.data.items))
                .catch(err => console.log(err))
        }
    }


    const users = props.users;
    const followFunc = props.follow;
    const unFollowFunc = props.unfollow;

    const userEl = users.map(u =>
        <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg'} alt="" className={styles.avaImg}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={ () => unfollow(u.id)}>Unfollow</button> :
                        <button onClick={ () => follow(u.id)}>Follow</button>}
                </div>

            <span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </span>
        </div>);

    const follow = (id) => {
        followFunc(id)
    }

    const unfollow = (id) => {
        unFollowFunc(id)
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
          <div>{userEl}</div>
        </div>
    )
}

export default UsersF;