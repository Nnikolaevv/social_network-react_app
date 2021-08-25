import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const MyPostsContainer = (props) => {
    const state = props.store.getState()
    const post = state.profilePage.post
    const newPostText = state.profilePage.newPostText
    const dispatch = props.store.dispatch


  const addPost = () => {
      dispatch(addPostActionCreator());
  }

  const updateText = (text) => {
      dispatch(updateNewPostActionCreator(text))
  }

  return (
    <MyPosts post={post} newPostText={newPostText} addPost={addPost} updateText={updateText} />
  )
}



export default MyPostsContainer
