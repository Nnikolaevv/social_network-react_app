import React from "react";
import './sideBarFriends.module.css'

const SideBarFriends = (props) => {
    const friends = props.friends
    const friendsElements = friends.map(f => {
        return (
            <div key={f.id}>
                <div className='friendsAvatarImg'>
                    <img src={f.avatarImg} alt="img"/>
                </div>
                <div className='friendName'>
                    {f.name}
                </div>
            </div>
        )
    })

    return (
        <div className='friendsWrapper'>
            <h3>Friends</h3>
        <div className='friends'>
            { friendsElements }
        </div>
        </div>
    )
}

export default SideBarFriends