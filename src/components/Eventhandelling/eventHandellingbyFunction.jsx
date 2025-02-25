import React, { useState } from 'react';

export default function eventHandellingbyFunction() {
    const [changedValue, setChangedValue] = useState('');

    const eventHandelling = (e) => {
      setChangedValue(e.target.value);
    };
  return (
    <div>
        <input type="text" onChange={eventHandelling} />
        <p>{changedValue}</p>
    </div>
  )
}
