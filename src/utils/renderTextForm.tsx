import React from "react";
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField'
import { InputProps as StandardInputProps } from "@material-ui/core/Input";
import { Field } from "redux-form";

interface IProps {
    label: string
    input: StandardTextFieldProps,
    custom: StandardTextFieldProps,
    meta: { touched: boolean, invalid: boolean, error: string }
}

const renderTextField = ({
    input,
    label,
    meta: { touched, invalid, error },
    ...custom
}: IProps) => (
    <TextField
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export default renderTextField;