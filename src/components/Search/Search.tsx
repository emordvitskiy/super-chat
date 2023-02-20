import styles from './styles.module.css';

export function Search() {
  return (
    <div className={styles['search-container']}>
      <input type="text" placeholder="Search" />
    </div>
  );
}
