import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

}))
const Profile = (props) => {
    const classes = useStyles()

  return (
    <Container>
        <ProfileInfo {...props}/>
        <MyPostsContainer  />
    </Container>

  )
}

export default Profile
