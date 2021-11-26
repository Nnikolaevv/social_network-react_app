import React, {FC} from "react";
import {Formik, Form} from "formik";
import TextFieldsForm from "../../../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";
import {Grid, TextField} from "@material-ui/core";
import ButtonSubmit from "../../../common/FormsUI/MaterialUIForms/ButtonSubmit/ButtonSubmit";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    initialValues: ProfileType
    editProfileInfoSave: (data: Object) => void
    onPhotoSelected: (e: any) => void
    profile: ProfileType
    isOwner: boolean
    editMode: boolean
}


const ProfileDataForm: FC<PropsType> = ({
                                            initialValues,
                                            editProfileInfoSave,
                                            onPhotoSelected,
                                            profile,
                                            isOwner,
                                            editMode
                                        }) => {

    const INITIAL_FORM_STATE = {
        fullName: initialValues.fullName,
        lockingForAJob: initialValues.lookingForAJob,
        lookingForAJobDescription: initialValues.lookingForAJobDescription,
        aboutMe: initialValues.aboutMe,
        contacts: {...initialValues.contacts},
    }

    const onSubmit = (value: Object) => {
        editProfileInfoSave(value)
    }

    return (
        <div>
            <Formik initialValues={{
                ...INITIAL_FORM_STATE
            }}
                    onSubmit={onSubmit}>
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField name='file'
                                       type={'file'}
                                       onChange={onPhotoSelected}/>
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
                        {Object.keys(profile.contacts).map(key => {
                            return (
                                <Grid item>
                                    <TextFieldsForm key={key}
                                                    name={key}
                                                    label={key}
                                                    variant='standard'/>
                                </Grid>
                            )
                        })}
                    </Grid>
                    {isOwner &&
                         <ButtonSubmit variant="contained"
                                  color="primary"
                         >
                            {editMode && 'Save'}
                        </ButtonSubmit>}
                </Form>
            </Formik>
        </div>
    )
}


export default ProfileDataForm