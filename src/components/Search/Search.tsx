import styles from './styles.module.css';

export function Search() {
  return (
    <div className={styles['search-container']}>
      <div className={styles['search-wrap']}>
        <div className={styles['icon-wrap']} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
