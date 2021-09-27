import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from "./AddMEssageForm/AddMessageForm";


const Dialogs = (props) => {
    const dialogs = props.dialogs;
    const incomeMessages = props.incomeMessages;
    const outcomeMessages = props.outcomeMessages;


    const dialogsElement = dialogs.map(d => <DialogItem name={d.name}
                                                        key={d.id}
                                                        id={d.id}
                                                        avatarImg={d.avatarImg}/>);
    const incomeMessagesElement = incomeMessages.map(m => <Message message={m.message} key={m.id}/>);
    const outcomeMessagesElement = outcomeMessages.map(m => <Message message={m.message} key={m.id}/>);




    const addNewMessage = (message) => {
        props.sendMsg(message.newMessage)
    }

    return (
        <div className='dialogs'>
            <div className='dialogsItems'>
                {dialogsElement}
            </div>
            <div className='messages'>
                <div className='incomeMessages'>
                    {incomeMessagesElement}
                </div>
                <div className='outcomeMessages'>
                    {outcomeMessagesElement}
                </div>
             <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};


export default Dialogs
