import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { Picker } from './styles';

registerLocale('pt-BR', pt);

export default function DateTimePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selectedDateTime, setSelectedDateTime] = useState(
    defaultValue && defaultValue.id
  );

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.date',
        // path: 'props.selected',
        // clearValue: pickerRef => {
        //   pickerRef.clear();
        // },
      });
    }
    // eslint-disable-next-line
  }, [ref.current, registerField]);

  function handleChange(date) {
    setSelectedDateTime(date);
  }

  return (
    <>
      <Picker
        selected={selectedDateTime}
        onChange={() => {}}
        ref={ref}
        data-date={selectedDateTime}
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
