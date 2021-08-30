import React from "react";
import styles from './users.module.css'


const Users = (props) => {
    const pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => props.setPage(p)}
                              className={props.currentPage === p && styles.selectedPage}> {p} </span>
                    )

                })}
            </div>
            <div>
                {props.users.map(u => <div key={u.id}>
                        <div>
                            <img
                                src={u.photos.small != null ? u.photos.small : 'https://cdn.pnp.ru/upload/entities/2020/01/15/article/detailPicture/48/2d/d0/40/e84ae6bc95ba98684f59184cc5d1e3a9.jpg'}
                                alt="" className={styles.avaImg}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
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
        </div>
    )
}


export default Users;