import { TChatItem } from '../../types';
import { LetterAvatar } from './LetterAvatar';
import { ImgAvatar } from './ImgAvatar';

import styles from './styles.module.css';

type ChatItemProps = Omit<TChatItem, 'chat_id'>;

export function ChatItem({ avatar_url, user_name, last_message }: ChatItemProps) {
  return (
    <div className={styles['chat-item-container']}>
      {avatar_url && <ImgAvatar url={avatar_url} />}
      {!avatar_url && <LetterAvatar name={user_name} />}
      <div className={styles['text-container']}>{last_message.content}</div>
    </div>
  );
}
