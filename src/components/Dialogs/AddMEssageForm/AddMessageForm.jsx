import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name={'newMessage'}
                   type="text"
                   placeholder="Enter message"/>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux

