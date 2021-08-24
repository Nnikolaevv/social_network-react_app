import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMsgActionCreator, updateMsgTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    const dialogsElement = props.dialogsState.dialogs.map(d => <DialogItem name={d.name}
                                                                           id={d.id}
                                                                           avatarImg={d.avatarImg}/>);
    const incomeMessagesElement = props.dialogsState.incomeMessages.map(m => <Message message={m.message}/>);
    const outcomeMessagesElement = props.dialogsState.outcomeMessages.map(m => <Message message={m.message}/>);

    const inputMessage = React.createRef()

    const sendMsg = () => {
        props.dispatch(sendMsgActionCreator());
    }

    const updateMsgText = () => {
       const inputMsg = inputMessage.current.value
        props.dispatch(updateMsgTextActionCreator(inputMsg))
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
                           value={props.dialogsState.newMsgText}
                           onChange={updateMsgText} type="text"/>
                    <div>
                        <button onClick={sendMsg}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Dialogs
