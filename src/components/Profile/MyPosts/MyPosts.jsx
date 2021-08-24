import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElement = props.post.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  const newPostElement = React.createRef()

  const addPost = () => {
      props.dispatch({type: 'ADD-POST'});
  }

  const updateText = () => {
      const text = newPostElement.current.value;
      props.dispatch({type: 'UPDATE-NEW-POST-TEXT',
                        newPostText: text})
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>MY POSTS</h3>
      </div>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={updateText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts
