import React from "react";
import './../ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
            <div className={'formSummaryError'}>
                <span>{props.error}</span>
            </div>}
             <button >Submit</button>
            <div>
                <b>Full name</b> : <Field component={Input}
                                          name={'fullName'}
                                          type="text"
                                          placeholder={'Full name'}/>
            </div>
            <div>
                <b>Looking for a job</b> : <Field component={Input}
                                                  name={'lockingForAJob'}
                                                  type="checkbox"
                                                  checked={true}/>
                                                <span>Yes</span>

            </div>
            <div>
                <b>Job description</b> : <Field component={Textarea}
                                                name={'lookingForAJobDescription'}
                                                type="text"
                                                placeholder={'My professional skills'}
            />
            </div>
            <div>
                <b>About me</b>: <Field component={Textarea}
                                        name={'aboutMe'}
                                        type="text"
                                        placeholder={'aboutMe'}/>
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return  (
                    <div className='contact' key={key}>
                        {key}: <Field component={Input}
                                      name={'contacts.' + key}
                                      type="text"
                                      placeholder={key}
                    />
                    </div>
                )
            })}
            </div>
        </form>

    )
}

const ProfileDataFormRedux = reduxForm({form: "ProfileDataForm"})(ProfileDataForm)

export default ProfileDataFormRedux