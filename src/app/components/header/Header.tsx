import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__left}>left</div>
        <div className={styles.header__right}>right</div>
    </header>
  )
}