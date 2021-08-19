import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  const postData = [
    {id: 1, message: 'Hello, how are you?', likeCount: 10},
    {id: 2, message: 'It\'s my first post', likeCount: 15},
    {id: 3, message: 'Yo Yo', likeCount: 20},
    {id: 4, message: 'buy', likeCount: 25},
  ]

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
        <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
        <Post message={postData[1].message} likeCount={postData[1].likeCount}/>
      </div>
    </div>
  )
}

export default MyPosts
