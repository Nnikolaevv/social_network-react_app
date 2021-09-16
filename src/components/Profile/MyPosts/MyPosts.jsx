import React from "react";
import './MyPosts.module.css'
import Post from "./Post/Post";

import MyPostFormRedux from "./MyPostForm";


const MyPosts = (props) => {
    const postElement = props.post.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>);

    const addPost = (post) => {
        props.addPost(post.newPostText);
    };

    return (
        <div className='postsBlock'>
            <div>
                <h3>MY POSTS</h3>
            </div>
            <div>
                <MyPostFormRedux onSubmit={addPost}/>
            </div>
            <div className='posts'>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts
