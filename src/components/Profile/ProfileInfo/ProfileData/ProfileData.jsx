import React from "react";
import Contact from "../Contact/Contact";

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&  <button onClick={props.onClickEdit}>Edit</button>}
            <div>
                <b>Full name</b> : {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>Job description</b> : {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return  <Contact key={key}
                                 contactTitle={key}
                                 contactValue={props.profile.contacts[key]}
                />
            })}
            </div>
        </div>

    )
}

export default ProfileData;