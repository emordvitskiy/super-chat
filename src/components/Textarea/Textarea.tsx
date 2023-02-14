import React from 'react';

import './styles.css';

interface TextareaProps {
  sendMessage(val: string): void;
}

export function Textarea({ sendMessage }: TextareaProps) {
  const [value, setValue] = React.useState<string>();

  const handleSubmit = () => {
    if (value !== '' && value !== undefined) {
      sendMessage(value);
      setValue('');
    } else {
      // Show that empty message is not allowed
    }
  }

  // @TODO fix any
  const handleEnterPress = (event: any) => {

    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleChange = (event: any) => {
    const inputVal = event.target.value;
    setValue(inputVal);
  };

  return (
    <div className='text-container'>
      <textarea placeholder='Type a message' value={value} onChange={handleChange} onKeyUp={handleEnterPress} />
      <button onClick={handleSubmit}>Send message</button>
    </div>
  )
}
