import React from 'react';

import { Message, MessageStatus } from '../../types';
import { getRandomFromInterval } from '../../helpers/random';
import { delay } from '../../helpers/promisify';

type HandleMessagesTuple = [
  Message[],
  (text: string) => Promise<void>,
];

const updateMessageStatusById = (messages: Message[], messageId: string, status: MessageStatus) => {
  const messageIndex = messages.findIndex(({ id }) => id === messageId);

  return [
    ...messages.slice(0, messageIndex),
    {
      ...messages[messageIndex],
      status,
    },
    ...messages.slice(messageIndex + 1),
  ];
};

export function useHandleMessages(): HandleMessagesTuple {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    const newMessage: Message = {
      id: `${Math.random()}`,
      text,
      timestamp: Date.now(),
      isMy: true,
      status: MessageStatus.Sending,
    };

    // Show new message on screen. Status is sending
    setMessages((prevState) => {
      return [
        ...prevState,
        newMessage,
      ];
    });

    // delay for network request
    await delay(1000 * getRandomFromInterval(0.2, 1));

    // There is a 10% chance that transimtting is failed
    const isSucceeded = Math.random() > 0.1;

    // Change status of the screen to Unread. It means that message is sent succefully
    // In this case message sending is failed it is shown on the screen but won't be read by partner
    setMessages(
      (prevState) => updateMessageStatusById(
        prevState,
        newMessage.id,
        isSucceeded ? MessageStatus.Unread : MessageStatus.Failed,
      )
    );

    if (isSucceeded) {
      // delay message to be read
      await delay(1000 * getRandomFromInterval(1, 3));

      setMessages(
        (prevState) => updateMessageStatusById(
          prevState,
          newMessage.id,
          MessageStatus.Read,
        )
      );

      // delay message to type by partner and send back with the network
      await delay(1000 * getRandomFromInterval(1, 5));

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
    }
  };

  return [
    messages,
    sendMessage,
  ];
}
