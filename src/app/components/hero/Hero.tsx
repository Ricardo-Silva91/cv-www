import WrittenText from '../written-text/WrittenText'
import styles from './hero.module.scss'

export default function Hero() {
  const writtenLines = [
    { text: 'Hello, my name is Ricardo Silva' },
    { text: 'I\'m a software engineer focused on front-end development.' },
  ]

  return (
    <div className={styles.hero}>
      <WrittenText lines={writtenLines}></WrittenText>
    </div>
  )
}