import React, {FC} from "react";

type PropsType = {
  message: string
}

const Message: FC<PropsType> = ({message}) => {
  return <div>{message}</div>;
}

export default Message