import React from 'react';

import { Message, MessageStatus } from '../../types';
import { Page } from '../../components/Page';
import { Textarea } from '../../components/Textarea';
import { MessagesArea } from '../../components/MessagesArea';

export function ChatScreen() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const sendMessage = (val: string) => {
    const newMessage: Message = {
      id: `${Math.random()}`,
      text: val,
      timestamp: Date.now(),
      isMy: true,
      status: MessageStatus.Sending,
    };
    const sendMyMessageTime = 1000 * (4.5 * Math.random() + 0.5);

    setTimeout(() => {
      setMessages((prevState) => {
        return [
          ...prevState,
          newMessage,
        ];
      });

      const sendBackMessageTime = 1000 * (8 * Math.random() + 2);

      setTimeout(() => {
        const backMessage: Message = {
          id: `${Math.random()}`,
          text: `${Math.random()}`,
          timestamp: Date.now(),
          isMy: false,
          status: MessageStatus.Unread,
        };

        setMessages((prevState) => {
          return [
            ...prevState,
            backMessage,
          ];
        });
      }, sendBackMessageTime);
    }, sendMyMessageTime);
  };

  return (
    <Page>
      <MessagesArea messages={messages} />
      <Textarea sendMessage={sendMessage} />
    </Page>
  )
}
