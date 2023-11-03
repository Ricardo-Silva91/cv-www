import WrittenText from '../written-text/WrittenText'
import styles from './interests.module.scss'

export default function Interests() {
  return (
    <div id='interests' className={styles.interests}>
      
      <WrittenText lines={[{ text: 'Interests' }]}></WrittenText>
    </div>
  )
}