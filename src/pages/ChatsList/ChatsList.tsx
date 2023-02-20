import React from 'react';

import { TChatItem } from '../../types';
import { Page } from '../../components/Page';
import { Search } from '../../components/Search';
import { ChatItem } from '../../components/ChatItem';

import styles from './styles.module.css';

export function ChatsList() {
  const [chats, setChats] = React.useState<TChatItem[]>([]);
  const isEmpty = chats.length === 0;

  React.useEffect(() => {
    // handle error
    fetch('/data-mocks/chats.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        setChats(result);
      })
  }, []);

  return (
    <Page>
      <Search />
      <div className={styles['list-container']}>
        {
          isEmpty
            ? (
              <div>Loading...</div>
            )
            : (
              chats.map(
                ({ chat_id, ...props }: TChatItem) => (<ChatItem key={chat_id} {...props} />)
              )
            )
        }
      </div>
    </Page>
  );
}
