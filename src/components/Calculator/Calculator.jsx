import React, { useState } from 'react';

export default function Example() {
  // Initialize the state with an empty string
  const [inputValue, setInputValue] = useState('');

  // Handle the change event for the input field
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Determine whether to render the input field or the button
  const renderElement = () => {
    if (inputValue === 'button') {
      return <button>Submit</button>;
    } else {
      return <input type="text" onChange={handleChange} />;
    }
  };

  return (
    <div>
      <label>Select an option:</label>
      <select value={inputValue} onChange={handleChange}>
        <option value="input">Input field</option>
        <option value="button">Button</option>
      </select>
      {renderElement()}
    </div>
  );
}
