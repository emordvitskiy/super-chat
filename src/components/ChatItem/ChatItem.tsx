import { Link } from 'react-router-dom';

import { TChatItem } from '../../types';
import { LetterAvatar } from './LetterAvatar';
import { ImgAvatar } from './ImgAvatar';

import styles from './styles.module.css';

export function ChatItem({ chat_id, avatar_url, user_name, last_message }: TChatItem) {
  return (
    <Link to={`/chat/${chat_id}`}className={styles['chat-item-container']} >
      {avatar_url && <ImgAvatar url={avatar_url} />}
      {!avatar_url && <LetterAvatar name={user_name} />}
      <div className={styles['text-container']}>{last_message.content}</div>
    </Link>
  );
}
