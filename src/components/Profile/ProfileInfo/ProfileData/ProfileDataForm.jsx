import React from "react";
import {Formik, Form} from "formik";
import TextFieldsForm from "../../../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import {Button, Grid, TextField} from "@material-ui/core";
import ButtonSubmit from "../../../common/FormsUI/MaterialUIForms/ButtonSubmit/ButtonSubmit";


const ProfileDataForm = (props) => {

    const INITIAL_FORM_STATE = {
        fullName: props.initialValues.fullName,
        lockingForAJob: props.initialValues.lockingForAJob,
        lookingForAJobDescription: props.initialValues.lookingForAJobDescription,
        aboutMe: props.initialValues.aboutMe,
        contacts: {...props.initialValues.contacts},
    }


    const onSubmit = (value) => {
        props.editProfileInfoSave(value)
    }

    return (

        <div>
            {props.error &&
            <div className={'formSummaryError'}>
                <span>{props.error}</span>
            </div>}

            <Formik initialValues={{
                ...INITIAL_FORM_STATE
            }}
                    onSubmit={onSubmit}>
                <Form>
                    <Grid container spacing={2}>

                        <Grid item xs={8}>
                            <TextField name='file'
                                       type={'file'}
                                       onChange={props.onPhotoSelected} />
                        </Grid>

                        <Grid item xs={8}>
                            <TextFieldsForm name='fullName'
                                            label='Full name'
                                            variant='standard'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm name='lockingForAJob'
                                            label='Locking for a job'
                                            variant='standard'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm as='textarea'
                                            name='lookingForAJobDescription'
                                            label='Full name'
                                            variant='standard'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm as='textarea'
                                            name='aboutMe'
                                            label='About me'
                                            variant='standard'/>
                        </Grid>


                        {Object.keys(props.profile.contacts).map(key => {
                            return  (
                                <Grid item>
                                      <TextFieldsForm key={key}
                                                      name={key}
                                                      label={key}
                                                      variant='standard'/>

                                </Grid>
                            )})}
                    </Grid>
                    {props.isOwner &&
                    <ButtonSubmit variant="contained"
                            color="primary"
                            >{props.editMode && 'Save'}</ButtonSubmit>}
                </Form>
            </Formik>
    </div>



    )
}


export default ProfileDataForm