import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>MY POSTS</h3>
      </div>
      <div>
        <div>
          <textarea name=""></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={'Hello, how are you?'} likeCount={15}/>
        <Post message={"It's my first post"} likeCount={20}/>
      </div>
    </div>
  )
}

export default MyPosts
