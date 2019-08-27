import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { Picker } from './styles';

registerLocale('pt-BR', pt);

export default function DateTimePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [dateTime, setDateTime] = useState(defaultValue);

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <Picker
        name={fieldName}
        selected={dateTime}
        onChange={date => setDateTime(date)}
        ref={ref}
        minDate={new Date()}
        locale="pt-BR"
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd 'de' MMMM 'de' yyyy', às' HH:mm"
        timeCaption="Hora"
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DateTimePicker.defaultProps = {
  placeholder: '',
};
