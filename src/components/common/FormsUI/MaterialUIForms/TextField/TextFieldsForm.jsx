import React from 'react';
import {TextField} from "@material-ui/core";
import {useField} from 'formik';

const TextFieldsFormikMUI = ({name, ...otherProps}) => {

    const [field, metaData] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
    }
    if (metaData && metaData.touched && metaData.error) {
        configTextField.error = true;
        configTextField.helperText = metaData.error
    }

    return (
        <TextField {...configTextField} />
    )
}


export default TextFieldsFormikMUI