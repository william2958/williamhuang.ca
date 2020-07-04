import React, { useState } from 'react';
import MUIPlacesAutocomplete, { geocodeBySuggestion } from 'mui-places-autocomplete';
import { InputWrapper } from '../styles';
import bindControl from '../bindControl';

const LocationSearchInput = ({ onPickSuggestion, meta, ...other }) => {
  const [freezeLocation, setFreezeLocation] = useState(true);

  let touched,
    error,
    warning = false;
  if (meta) {
    touched = meta.touched;
    error = meta.error;
    warning = meta.warning;
  }

  const onSuggestionSelected = (suggestion) => {
    // Once a suggestion has been selected by your consumer you can use the utility geocoding
    // functions to get the latitude and longitude for the selected suggestion.
    geocodeBySuggestion(suggestion)
      .then((results) => {
        if (results.length < 1) {
          console.error('Geocode request completed successfully but without any results');
          return;
        }

        // Just use the first result in the list to get the geometry coordinates
        const { geometry } = results[0];

        const coordinates = {
          lat: geometry.location.lat(),
          lng: geometry.location.lng(),
        };

        const fullLocation = {
          suggestion,
          coordinates,
        };

        onPickSuggestion(fullLocation);
      })
      .catch((err) => {
        console.error('There was an error selecting that location: ', err);
      });
  };

  // the value of the input if set imperatively by redux form will be
  // under other.input.value
  // but errors occur if I try to pass that to textFieldProps.
  // Solve another day

  // For if we want an uncontrolled component
  if (!other.onChange) {
    let locationDetail;
    // bandaid fix
    if (other.input.value.suggestion) {
      locationDetail = other.input.value.suggestion.description;
    } else {
      locationDetail = other.input.value;
    }
    return (
      <InputWrapper filled={other.input.value}>
        <MUIPlacesAutocomplete
          onSuggestionSelected={onSuggestionSelected}
          renderTarget={() => <div />}
          textFieldProps={{
            ...other,
            ...(freezeLocation && { value: locationDetail }),
            placeholder: locationDetail,
            onFocus: () => {
              setFreezeLocation(false);
            },
          }}
        />
        {touched && error && <div className="helperText errorText">{error}</div>}
        {touched && warning && <div className="helperText warningText">{warning}</div>}
      </InputWrapper>
    );
  } else {
    return (
      <InputWrapper filled={other.input ? other.input.value : false}>
        <MUIPlacesAutocomplete
          onSuggestionSelected={onSuggestionSelected}
          renderTarget={() => <div />}
          textFieldProps={{
            ...other,
          }}
        />
        {touched && error && <div className="helperText errorText">{error}</div>}
        {touched && warning && <div className="helperText warningText">{warning}</div>}
      </InputWrapper>
    );
  }
};

export const FormLocationInput = bindControl(LocationSearchInput);

export default LocationSearchInput;
