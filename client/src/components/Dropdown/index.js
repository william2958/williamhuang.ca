import React from 'react';

import {DropdownItem, DropdownWrapper} from "./styles";

const Dropdown = ({ value, options, onChange }) => {

	return (
		<div className="dropdown open">
			<DropdownWrapper type="button" id="dropdownMenu1"
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{value}
			</DropdownWrapper>
			<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
				{
					options.map(
						option => (
							<DropdownItem className="dropdown-item" key={option} onClick={() => onChange(option)}>{option}</DropdownItem>
						)
					)
				}
			</div>
		</div>
	)

};

export default Dropdown;
