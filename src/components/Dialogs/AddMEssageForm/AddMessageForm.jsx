import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}
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

