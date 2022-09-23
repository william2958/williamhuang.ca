import React from 'react';

import TextField from '@material-ui/core/TextField';
import { InputWrapper } from '../styles';

const TextBoxSimple = ({ value, onChange, label, placeholder, fullWidth, id, type = 'text', errorField, numRows = 4, fixedRows = true, name }) => {
	return (
		<InputWrapper filled={value && value.length > 0} errorField={errorField}>
			<TextField
				id={id}
				name={name}
				label={label || placeholder}
				value={value}
				onChange={onChange}
				margin="normal"
				fullWidth={fullWidth}
				variant="outlined"
				type={type}
				multiline
				rows={numRows}
				rowsMax={fixedRows ? numRows : null}
			/>
			{errorField && <div className="helperText errorText">{errorField}</div>}
		</InputWrapper>
	);
};

export default TextBoxSimple;
