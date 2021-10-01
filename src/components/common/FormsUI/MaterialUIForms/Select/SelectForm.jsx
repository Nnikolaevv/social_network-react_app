import React from 'react';
import {TextField, MenuItem} from "@material-ui/core";
import {useField, useFormikContext} from 'formik';

const CheckboxFormikMUI = ({name, options, ...otherProps}) => {
    const { setFieldValue } = useFormikContext()
    const [field, metaData] = useField(name)

    const handleChange = e => {
        const { value } = e.target;
        setFieldValue(name, value)
    }

    const configSelect = {
        ...field,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
        ...otherProps,

    }
    if (metaData && metaData.touched && metaData.error) {
        configSelect.error = true;
        configSelect.helperText = metaData.error
    }

    return (
        <TextField {...configSelect} >
            {Object.key(options).map((item, pos) => {
                return (
                    <MenuItem key={pos} value={item}>
                        {option[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}


export default CheckboxFormikMUI