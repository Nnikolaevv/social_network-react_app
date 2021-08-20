import s from './sideBarFriends.module.css'

const SideBarFriends = (props) => {
    const friends = props.sideBarFriendsState.map(friend => {
        return (
            <div>
                <div className={s.friendsAvatarImg}>
                    <img src={friend.avatarImg} alt="img"/>
                </div>
                <div className={s.friendName}>
                    {friend.name}
                </div>
            </div>
        )
    })

    return (
        <div className={s.friendsContainer}>
            <h3>Friends</h3>
        <div className={s.friends}>

            { friends}
        </div>
        </div>
    )
}

export default SideBarFriends