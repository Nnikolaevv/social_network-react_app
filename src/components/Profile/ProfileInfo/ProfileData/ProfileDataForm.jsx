import React from "react";
import {Formik, Form} from "formik";
import TextFieldsForm from "../../../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import {Button, Grid, TextField} from "@material-ui/core";


const ProfileDataForm = (props) => {

    const INITIAL_FORM_STATE = {
        fullName: props.initialValues.fullName,
        lockingForAJob: props.initialValues.lockingForAJob,
        lookingForAJobDescription: props.initialValues.lookingForAJobDescription,
        aboutMe: props.initialValues.aboutMe,
        contacts: {...props.initialValues.contacts},
    }


    const onSubmit = () => {

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
                                       variant='outlined'
                                       onChange={props.onPhotoSelected} />
                        </Grid>

                        <Grid item xs={8}>
                            <TextFieldsForm name='fullName'
                                            label='Full name'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm name='lockingForAJob'
                                            label='Locking for a job'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm as='textarea'
                                            name='lookingForAJobDescription'
                                            label='Full name'/>
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldsForm as='textarea'
                                            name='aboutMe'
                                            label='About me'/>
                        </Grid>


                        {Object.keys(props.profile.contacts).map(key => {
                            return  (
                                <Grid item>
                                      <TextFieldsForm key={key}
                                                      name={key}
                                                      label={key}/>

                                </Grid>
                            )})}
                    </Grid>
                </Form>
            </Formik>
    </div>



    )
}


export default ProfileDataForm