import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          Alex
        </div>
        <div className={s.dialog}>
          Denis
        </div>
        <div className={s.dialog}>
          Petr
        </div>
        <div className={s.dialog}>
          Vasiliy
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>Yo Yo</div>
      </div>
    </div>
  )
};

export default Dialogs
