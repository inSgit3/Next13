'useClient'
import styles from './DarkModeSwitch.module.css'
import {useState} from 'react';

const DarkModeSwitch = () => {
    const [modeToggle, setModeToggle] = useState(false)

    const handleClick = (e) => {
        setModeToggle(!modeToggle)
        document.documentElement.style.setProperty(
            '--body-background-color',
            modeToggle ? '#111' : '#fff'
          );
    }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.mode}>🔆 </div>
      <div className={styles.mode}>🌙</div>
      <div className={modeToggle ? styles.dayOn : styles.dayOff}></div>
    </div>
  )
}

export default DarkModeSwitch
