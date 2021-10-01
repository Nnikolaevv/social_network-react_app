import React from 'react';
import {TextField} from "@material-ui/core";
import {useField} from 'formik';

const TextFieldsForm = ({name, ...otherProps}) => {

    const [field, metaData] = useField(name)

    const configTextField = {
        ...field,
        fullWidth: true,
        variant: 'outlined',
        ...otherProps,
    }
    if (metaData && metaData.touched && metaData.error) {
        configTextField.error = true;
        configTextField.helperText = metaData.error
    }

    return (
        <TextField {...configTextField} />
    )
}


export default TextFieldsForm