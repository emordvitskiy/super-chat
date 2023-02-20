import cx from 'classnames';

import styles from './styles.module.css';

type ImgAvatarProps = {
  url: string;
}

export function ImgAvatar({ url }: ImgAvatarProps) {
  return (
    <div className={cx(styles['avatar'], styles['avatar-img'])} style={{ backgroundImage: `url(${url})` }} />
  )
}
