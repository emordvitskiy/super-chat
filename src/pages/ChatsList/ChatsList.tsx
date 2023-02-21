import { useLoaderData } from 'react-router-dom';

import { TChatItem } from '../../types';
import { Page } from '../../components/Page';
import { Search } from '../../components/Search';
import { ChatItem } from '../../components/ChatItem';

import styles from './styles.module.css';

export function ChatsList() {
  const chats = useLoaderData() as TChatItem[];
  const isEmpty = chats.length === 0;

  return (
    <Page>
      <Search />
      <div className={styles['list-container']}>
        {
          isEmpty
            ? (
              <div>You don't have conversations yet</div>
            )
            : (
              chats.map(
                (item: TChatItem) => (<ChatItem key={item.chat_id} {...item} />)
              )
            )
        }
      </div>
    </Page>
  );
}
