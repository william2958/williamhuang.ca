import React from 'react';
import { Field } from 'redux-form';

const bindControl = (Component) => (props) => {
  return <Field component={Component} {...props} />;
};

export default bindControl;
