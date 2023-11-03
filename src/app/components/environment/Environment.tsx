import styles from './environment.module.scss'

export default function Environment() {
  return (
    <div className={styles.environment}
      data-scroll data-scroll-sticky data-scroll-target="#main"
    >
      <div
        className={`${styles['environment__cloud']} ${styles['environment__cloud--left']}`}
        data-scroll
        data-scroll-speed="10"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      ></div>
      <div
        className={`${styles['environment__cloud']} ${styles['environment__cloud--right']}`}
        data-scroll
        data-scroll-speed="-10"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      ></div>
    </div>
  )
}