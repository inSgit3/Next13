import styles from './DarkModeSwitch.module.css'

const DarkModeSwitch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mode}>🔆 </div>
      <div className={styles.mode}>🌙</div>
      <div className={styles.circle}>🔘</div>
    </div>
  )
}

export default DarkModeSwitch
