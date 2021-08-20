import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElement = props.postState.map(p => <Post message={p.message} likeCount={p.likeCount} />)

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
        { postElement }
      </div>
    </div>
  )
}

export default MyPosts
