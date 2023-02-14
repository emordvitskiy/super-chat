import { Message } from '../../types';

import './styles.css';

interface MessagesAreaProps {
  messages: Message[];
}

export function MessagesArea({ messages }: MessagesAreaProps) {
  if (messages.length === 0) {
    return (
      <div className='messages_container'>
        <div className='empty-message'>There is no messages yet</div>
      </div>
    )
  }

  return (
    <div className='messages_container'>
      {messages.map(({ id, text, isMy }) => {
        const class_names = `message-container ${isMy ? 'my-message' : 'not-my-message'}`;

        return (
          <div key={id} className={class_names}>{text}</div>
        );
      })}
    </div>
  );
}
