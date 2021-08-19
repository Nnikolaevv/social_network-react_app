import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={'Profile'}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  )
}

export default Profile
