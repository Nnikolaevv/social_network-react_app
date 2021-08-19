import s from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div className={'profileInfo'}>
      <div>
        <img src="https://via.placeholder.com/1000x300"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo