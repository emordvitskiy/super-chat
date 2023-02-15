import React, { ChangeEvent, KeyboardEvent } from 'react';

import { KEY_ENTER } from '../../constants';

import './styles.css';

interface TextareaProps {
  sendMessage(val: string): void;
}

export function Textarea({ sendMessage }: TextareaProps) {
  const [value, setValue] = React.useState<string>();

  const isValueEmpty = value === undefined || value === '';

  const handleSubmit = () => {
    if (!isValueEmpty) {
      sendMessage(value);
      setValue('');
    }
  }

  const handleEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {

    if (event.key === KEY_ENTER) {
      handleSubmit();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputVal = event.target.value;
    setValue(inputVal);
  };

  return (
    <div className="text-container">
      <textarea
        placeholder="Type a message"
        value={value}
        onChange={handleChange}
        onKeyUp={handleEnterPress}
      />
      <button onClick={handleSubmit} disabled={isValueEmpty}>
        Send message
      </button>
    </div>
  )
}
