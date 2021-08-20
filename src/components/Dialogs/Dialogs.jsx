import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElement = props.dialogsState.dialogs.map(d => <DialogItem name={d.name}
                                                                           id={d.id}
                                                                           avatarImg={d.avatarImg}/>);
    const incomeMessagesElement = props.dialogsState.incomeMessages.map(m => <Message message={m.message}/>);
    const outcomeMessagesElement = props.dialogsState.outcomeMessages.map(m => <Message message={m.message}/>);

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

            </div>
        </div>
    )
};

export default Dialogs
