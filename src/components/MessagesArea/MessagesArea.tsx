import cx from 'classnames';

import { Message } from '../../types';
import { EmptyMessages } from './EmptyMessages';
import { MessageBox } from './MessageBox';

import styles from './styles.module.css';

interface MessagesAreaProps {
  messages: Message[];
}

export function MessagesArea({ messages }: MessagesAreaProps) {
  const isEmpty = messages.length === 0;

  return (
    <div className={cx(styles['messages_container'], !isEmpty && styles['not-empty'])}>
      {
        (!isEmpty)
          ? messages.map(
            ({ id, ...messageBoxProps }) => (<MessageBox key={id} {...messageBoxProps} />)
          )
          : <EmptyMessages />
      }
    </div>
  );
}
