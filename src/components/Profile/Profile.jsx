import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className='Profile'>
      <ProfileInfo {...props}/>
      <MyPostsContainer  />
    </div>
  )
}

export default Profile
