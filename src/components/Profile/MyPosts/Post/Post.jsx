import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://media.glamour.com/photos/5fa0610c53352ad65a54976c/master/pass/Ava%20Max%202.jpg" alt=""/>
      <div>{ props.message }</div>
      <div>
        <span>Like: { props.likeCount }</span>
      </div>

    </div>

  )
}

export default Post
