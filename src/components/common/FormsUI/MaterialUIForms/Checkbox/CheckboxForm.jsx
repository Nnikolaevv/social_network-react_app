import React from 'react';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel
} from "@material-ui/core";
import {useField, useFormikContext} from 'formik';

const CheckboxForm = ({name, label, legend, ...otherProps}) => {
    const { setFieldValue } = useFormikContext();
    const [field, metaData] = useField(name);

    const handleChange = (e) => {
    const { checked } = e.target
        setFieldValue(name, checked)
    }

    const configCheckbox = {
        ...field,
        onChange: handleChange,
        fullWidth: true,
        variant: 'outlined',
        ...otherProps,
    }

    const configFormControl = {};
    if (metaData && metaData.touched && metaData.error) {
        configFormControl.error = true;
        configFormControl.helperText = metaData.error
    }

    return (
        <FormControl {...configFormControl}>
            <FormLabel component='legend'>{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...configCheckbox} />}
                                  label={label}/>
            </FormGroup>
        </FormControl>

    )
}


export default CheckboxForm