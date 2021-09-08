import React from "react";
import {addPost} from "../../../redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer
