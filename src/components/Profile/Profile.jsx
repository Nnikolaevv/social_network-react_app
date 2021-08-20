import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={'Profile'}>
      <ProfileInfo />
      <MyPosts postState={props.profileState.post} />
    </div>
  )
}

export default Profile
