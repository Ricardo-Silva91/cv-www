import styles from './environment.module.scss'

export default function Environment() {
  return (
    <div className={styles.environment}>
      {/* <div className={styles.stars}></div>
      <div className={styles.twinkling}></div> */}
      <div className={styles.environment__clouds}></div>
    </div>
  )
}