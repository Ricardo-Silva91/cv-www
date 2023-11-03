import WrittenText from '../written-text/WrittenText'
import styles from './curriculum.module.scss'

export default function Curriculum() {
  return (
    <div id="curriculum" className={styles.curriculum}>
      
      <WrittenText lines={[{ text: 'Curriculum' }]}></WrittenText>
    </div>
  )
}