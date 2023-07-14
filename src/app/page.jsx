import Image from 'next/image'
import styles from './page.module.css'
import home from '@/utilities/images/home.png'
import Button from '@/components/Button/Button'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h1 className={styles.title}>Write your articles here with us</h1>
        <p className={styles.desc}>After signing up in Dashboard page, you can write your articles and read them in Blogs page. For reading others articles, you do not need to log in or sign up. Just go to the Blogs page for that.
        </p>
        <Button url='/blog' text='Go to Blogs' className={styles.btn}/>
      </div>
<div className={styles.item}>
  <Image src={home} alt="illustration Logo"  className={styles.img} priority/>
</div>
</div>
  )
}
