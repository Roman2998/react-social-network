import React from "react";
import {useField} from "formik";
import {TextField} from "@mui/material";

export const MyTextField = ({name, ...props}) => {
	const [field, meta] = useField(name);
	const configTextField = {
		...field,
		...props,
		variant: 'outlined'
	};
	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}
	return (
		<TextField {...configTextField} />
	);
};