import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

  const dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Petr'},
    {id: 4, name: 'Vasiliy'},
  ];

  const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo Yo'},
    {id: 4, message: 'buy'},
  ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
      </div>
    </div>
  )
};

export default Dialogs
