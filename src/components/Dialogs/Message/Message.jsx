import s from "./Message.module.css";

function Message(props) {
  return <div className={s.message}>{props.message}</div>;
}

export default Message