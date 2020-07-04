import React from 'react';
import { DropdownWrapper } from './styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import bindControl from '../../Inputs/bindControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

// const exampleDropdownOptions = [
//   {
//     label: 'Ten',
//     value: 10,
//   },
//   {
//     label: 'Twenty',
//     value: 20,
//   },
//   {
//     label: 'Thirty',
//     value: 30,
//   },
// ];

const SimpleDropdown = ({ input, label, helperText, options }) => {
  return (
    <DropdownWrapper>
      <FormControl>
        <InputLabel htmlFor={label + '-helper'}>{label}</InputLabel>
        <Select
          value={input.value}
          onChange={input.onChange}
          inputProps={{
            name: label,
            id: label + '-helper',
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </DropdownWrapper>
  );
};

export const FormSimpleDropdown = bindControl(SimpleDropdown);
