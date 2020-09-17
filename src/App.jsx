import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './components/Form';
import Clocks from './components/Clocks';

import './App.css';

const App = () => {
  const [addedTime, setAddedTime] = useState([]);
  const [form, setForm] = useState({
    clockName: '',
    timeZone: NaN,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleSlectChange = (newValue) => {
    const { value, name } = newValue;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleClockAdd = () => {
    const { timeZone, clockName } = form;
    setAddedTime(prev => [...prev, { id: nanoid(), clockName, timeZone }]);
    setForm(prev => ({
      ...prev,
      clockName: '',
      timeZone: 0,
    }));
  }

  const handleRemoveClock = (id) => {
    setAddedTime(prev => [ ...prev.filter(item => item.id !== id) ]);
  }

  return (
    <React.Fragment>
      <Form 
        form={form} 
        onInputChange={handleInputChange}
        onSelectChange={handleSlectChange}
        onClockAdd={handleClockAdd}
      />
      <Clocks time={addedTime} onClockRemove={handleRemoveClock} />
    </React.Fragment>
  );
}

export default App;
