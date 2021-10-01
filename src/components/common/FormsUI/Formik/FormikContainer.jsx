import React from "react";
import {Formik, Form} from "formik";
import * as yup from 'yup';
import FormikControl from "./FormikControl";


const FormikContainer = (props) => {
    const initialValues = {
        email: '',
        description: '',
    }

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        description: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
    });


    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input'
                                       type='email'
                                       label='email'
                                       name='email'/>

                        <FormikControl control='textarea'
                                       type='text'
                                       label='description'
                                       name='description'/>

                        <button type='submit'>Submit</button>
                    </Form>
                    )

            }
        </Formik>
    )
}

export default FormikContainer