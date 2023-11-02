import WrittenText, { WrittenTextProps } from '../written-text/WrittenText'
import styles from './hero.module.scss'

export default function Hero() {
  const writtenTextProps: WrittenTextProps = {
    lines: [
      { text: 'Hello, my name is ' },
      { text: 'Ricardo Silva', classes: 'highlight' },
      { text: ',' },
      { text: '\n' },
      { text: 'I\'m a ' },
      { text: 'software engineer', classes: 'highlight' },
      { text: ' focused on ' },
      { text: 'front-end development.', classes: 'highlight' },
    ]
  };

  return (
    <div className={styles.hero}>
      <WrittenText lines={writtenTextProps.lines}></WrittenText>
    </div>
  )
}