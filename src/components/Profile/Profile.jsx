import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={'Profile'}>
      <ProfileInfo />
      <MyPosts post={props.profileState.post}
               newText={props.profileState.newText}
               dispatch={props.dispatch}
               />
    </div>
  )
}

export default Profile
