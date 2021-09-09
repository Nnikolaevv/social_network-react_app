import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const mexLength30 = maxLengthCreator(30)

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newPostText"}
                   type={'text'}
                   placeholder={'Enter new post'}
                   validate={[required, mexLength30]}
            />
            <div>
                <button>Add Post</button>
            </div>

        </form>

    )
}

const MyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostForm)

export default MyPostFormRedux