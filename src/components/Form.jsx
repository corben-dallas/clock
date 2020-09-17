import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 0, label: 'UTC 00:00', name: 'timeZone' },
  { value: 1, label: 'UTC+01:00', name: 'timeZone' },
  { value: 2, label: 'UTC+02:00', name: 'timeZone' },
  { value: 3, label: 'UTC+03:00', name: 'timeZone' },
  { value: 4, label: 'UTC+04:00', name: 'timeZone' },
  { value: 5, label: 'UTC+05:00', name: 'timeZone' },
  { value: 6, label: 'UTC+06:00', name: 'timeZone' },
  { value: 7, label: 'UTC+07:00', name: 'timeZone' },
  { value: 8, label: 'UTC+08:00', name: 'timeZone' },
  { value: 9, label: 'UTC+09:00', name: 'timeZone' },
  { value: 10, label: 'UTC+10:00', name: 'timeZone' },
  { value: 11, label: 'UTC+11:00', name: 'timeZone' },
  { value: 12, label: 'UTC+12:00', name: 'timeZone' },
  { value: -11, label: 'UTC-11:00', name: 'timeZone' },
  { value: -10, label: 'UTC-10:00', name: 'timeZone' },
  { value: -9, label: 'UTC-09:00', name: 'timeZone' },
  { value: -8, label: 'UTC-08:00', name: 'timeZone' },
  { value: -7, label: 'UTC-07:00', name: 'timeZone' },
  { value: -6, label: 'UTC-06:00', name: 'timeZone' },
  { value: -5, label: 'UTC-05:00', name: 'timeZone' },
  { value: -4, label: 'UTC-04:00', name: 'timeZone' },
  { value: -3, label: 'UTC-03:00', name: 'timeZone' },
  { value: -2, label: 'UTC-02:00', name: 'timeZone' },
  { value: -1, label: 'UTC-01:00', name: 'timeZone' },
]

const Form = ({ form, onInputChange, onSelectChange, onClockAdd }) => {
  return (
    <div className="form">
      <input 
        type="text"
        name="clockName"
        value={form.clockName}
        onChange={onInputChange}
        className="form__input"
        placeholder="Напишите название"
      />
      <Select 
        isSearchable={false}
        options={options}
        onChange={onSelectChange}
        placeholder='Выберите временную зону'
        className="form__select"
      />
      <button 
        onClick={onClockAdd}
        className={`form__btn ${(!form.clockName || (!form.timeZone && form.timeZone !== 0)) ? 'form__btn--disabled' : ''}`}
        disabled={(!form.clockName || (!form.timeZone && form.timeZone !== 0))}
      >
        Добавить
      </button>
    </div>
  )
}

Form.propTypes ={
  form: PropTypes.shape({
    timeZone: PropTypes.number,
    clockName: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  onClockAdd: PropTypes.func.isRequired,
}

export default Form;
