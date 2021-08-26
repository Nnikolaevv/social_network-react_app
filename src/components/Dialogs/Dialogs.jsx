import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const dialogs = props.dialogs;
    const newMsgText = props.newMsgText
    const incomeMessages = props.incomeMessages;
    const outcomeMessages = props.outcomeMessages;
    const sendMsgFunc = props.sendMsg;
    const updateMsgTextFunc = props.updateMsgText

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name}
                                                        key={d.id}
                                                        id={d.id}
                                                        avatarImg={d.avatarImg}/>);
    const incomeMessagesElement = incomeMessages.map(m => <Message message={m.message} key={m.id}/>);
    const outcomeMessagesElement = outcomeMessages.map(m => <Message message={m.message} key={m.id}/>);

    const inputMessage = React.createRef()

    const sendMsg = () => {
        sendMsgFunc();
    }

    const updateMsgText = () => {
       const inputMsg = inputMessage.current.value;
        updateMsgTextFunc(inputMsg);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div className={s.incomeMessages}>
                    {incomeMessagesElement}
                </div>
                <div className={s.outcomeMessages}>
                    {outcomeMessagesElement}
                </div>
                <div>
                    <input ref={inputMessage}
                           value={newMsgText}
                           onChange={updateMsgText} type="text"
                           placeholder="Enter message"/>
                    <div>
                        <button onClick={sendMsg}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
