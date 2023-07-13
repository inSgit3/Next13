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
    const day = <div className={styles.mode}>🔆 </div>
    const night = <div className={styles.mode}>🌙</div>

  return (
    <div className={styles.container} onClick={handleClick}>
      {modeToggle? day : night}
    </div>
  )
}

export default DarkModeSwitch
