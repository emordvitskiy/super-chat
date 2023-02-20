import cx from 'classnames';

import styles from './styles.module.css';

type LetterAvatarProps = {
  name: string;
}

export function LetterAvatar({ name }: LetterAvatarProps) {
  const firstLetter = name.at(0)?.toUpperCase();

  return (
    <div className={cx(styles['avatar'], styles['avatar-letter'])}>{firstLetter}</div>
  );
}
