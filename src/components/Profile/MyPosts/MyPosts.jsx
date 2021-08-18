import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        my posts
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message={'Hello, how are you?'} likeCount={15}/>
        <Post message={"It's my first post"} likeCount={20}/>
      </div>
    </div>
  )
}

export default MyPosts
