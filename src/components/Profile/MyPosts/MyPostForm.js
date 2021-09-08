import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'}
                   name={"newPostText"}
                   type={'text'}
                   placeholder={'Enter new post'}
            />
            <div>
                <button>Add Post</button>
            </div>

        </form>

    )
}

const MyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostForm)

export default MyPostFormRedux