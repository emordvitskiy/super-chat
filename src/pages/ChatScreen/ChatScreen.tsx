import { Page } from '../../components/Page';
import { Textarea } from '../../components/Textarea';
import { MessagesArea } from '../../components/MessagesArea';
import { useHandleMessages } from './hooks';

export function ChatScreen() {
  const [messages, sendMessage] = useHandleMessages();

  return (
    <Page>
      <MessagesArea messages={messages} />
      <Textarea sendMessage={sendMessage} />
    </Page>
  )
}
