import { Message } from '../../../types';

import styles from './styles.module.css';

type MessageBoxProps = Omit<Message, 'id'>;

export function MessageBox({ text, isMy, status }: MessageBoxProps) {
  const class_names = `${styles['message-container']} ${isMy ? `${styles['my-message']}` : `${styles['not-my-message']}`}`;

  return (
    <div className={class_names}>
      {text}
    </div>
  );
}
