import React from 'react';
import moment from 'moment';

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TimeInputWrapper } from './TimeInputWrapper';
import bindControl from '../bindControl';

const TimeInput = ({ input, id, label, placeholder, small }) => {
  return (
    <TimeInputWrapper small={small}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          {...input}
          value={moment(input.value, 'HH:mm a')}
          id={id}
          label={label}
          placeholder={placeholder}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
    </TimeInputWrapper>
  );
};

export const FormTimeInput = bindControl(TimeInput);

export default TimeInput;
