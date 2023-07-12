import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({url, text, onClick}) => {
  return (
     <>
     {url ? (
        <Link href={url}>
          <button className={styles.button} onClick={onClick}>
            {text}
          </button>
        </Link>
      ) : (
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      )}
       </>
  )
}

export default Button
