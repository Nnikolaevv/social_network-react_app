import s from './sideBarFriends.module.css'

const SideBarFriends = (props) => {
    const friends = props.friends
    const friendsElements = friends.map(f => {
        return (
            <div key={f.id}>
                <div className={s.friendsAvatarImg}>
                    <img src={f.avatarImg} alt="img"/>
                </div>
                <div className={s.friendName}>
                    {f.name}
                </div>
            </div>
        )
    })

    return (
        <div className={s.friendsWrapper}>
            <h3>Friends</h3>
        <div className={s.friends}>
            { friendsElements }
        </div>
        </div>
    )
}

export default SideBarFriends