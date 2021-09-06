import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import avatar from '../../../assets/img/ava.jpg'

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    debugger
  return (
    <div className={'profileInfo'}>
      <div>
        <img src="https://via.placeholder.com/1000x150"/>
      </div>
      <div className={s.descriptionBlock}>
          <div><img src={props.profile.photos.large || avatar } alt=""/></div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo