import styles from './about.module.scss'

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div
        data-scroll
        data-scroll-speed="-10"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >About</div>
    </div>
  )
}