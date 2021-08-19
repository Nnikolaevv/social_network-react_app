import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={'Alex'} id={'1'}/>
        <DialogItem name={'Denis'} id={'2'}/>
        <DialogItem name={'Petr'} id={'3'}/>
        <DialogItem name={'Vasiliy'} id={'4'}/>
      </div>
      <div className={s.messages}>
        <Message message={'Hi'}/>
        <Message message={'How are you'}/>
        <Message message={'Yo Yo'}/>
      </div>
    </div>
  )
};

export default Dialogs
