import React from 'react';
import { DropdownWrapper } from './styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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

const SimpleDropdown = ({ value, onChange, label, options }) => {
  return (
    <DropdownWrapper>
      <FormControl>
        <InputLabel htmlFor={label + '-helper'}>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
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
      </FormControl>
    </DropdownWrapper>
  );
};

export default SimpleDropdown;
