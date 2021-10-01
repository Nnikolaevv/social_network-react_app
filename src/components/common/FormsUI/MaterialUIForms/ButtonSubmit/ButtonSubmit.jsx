import React from 'react';
import {Button} from "@material-ui/core";
import {useFormikContext} from 'formik';

const ButtonSubmit = ({children, ...otherProps}) => {
    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm()
    }

    const configButton = {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit,
        ...otherProps,
    }
    // if (metaData && metaData.touched && metaData.error) {
    //     configTextField.error = true;
    //     configTextField.helperText = metaData.error
    // }

    return (
        <Button {...configButton} >
            {children}
        </Button>
    )
}


export default ButtonSubmit