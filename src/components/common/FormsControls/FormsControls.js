import React from "react";
import './FormControls.module.css'


const FormControl = ({Formtype, input, meta, ...props}) => {

    const error = meta.touched && meta.error

    return (
        <div className={'formControl' + " " +  (error ? 'error' : "")}>
            <div>
                <Formtype {...props} {...input} />
            </div>
            <div>
                {error && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props) => {
    return (
        <FormControl Formtype='textarea' {...props} />
    )
}

export const Input = (props) => {
    return (
        <FormControl Formtype='input' {...props} />
    )
}