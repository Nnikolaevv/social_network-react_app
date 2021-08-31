import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={'Profile'}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer  />
    </div>
  )
}

export default Profile
