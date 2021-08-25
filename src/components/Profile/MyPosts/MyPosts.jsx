import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    const post = props.post;
    const newPostText = props.newPostText;
    const addPostFunc = props.addPost;
    const updateTextFunc = props.updateText;

  const postElement = post.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  const newPostElement = React.createRef();


  const addPost = () => {
      addPostFunc();
  };
  const updateText = () => {
      const text = newPostElement.current.value;
      updateTextFunc(text)
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>MY POSTS</h3>
      </div>
      <div>
        <div>
          <textarea ref={ newPostElement } onChange={updateText} value={newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
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
