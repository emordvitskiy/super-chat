import cx from 'classnames';

import { Message, MessageStatus } from '../../../types';

import styles from './styles.module.css';

const getStatusClassName = (status: MessageStatus) => {
  switch (status) {
    case MessageStatus.Sending:
    default:
      return styles['status-item-sending'];
    case MessageStatus.Failed:
      return styles['status-item-failed'];
    case MessageStatus.Unread:
      return styles['status-item-unread'];
    case MessageStatus.Read:
      return styles['status-item-read'];
  }
}

type MessageBoxProps = Omit<Message, 'id'>;

export function MessageBox({ text, isMy, status }: MessageBoxProps) {
  const containerClassNames = cx(
    styles['message-container'],
    isMy ? `${styles['my-message']}` : `${styles['not-my-message']}`,
  );
  const statusItemClassNames = cx(
    styles['status-item'],
    getStatusClassName(status),
  )

  return (
    <div className={containerClassNames}>
      { isMy && (
        <div className={styles['status-wrap']}>
          <div className={statusItemClassNames} />
        </div>
      )}
      {text}
    </div>
  );
}
