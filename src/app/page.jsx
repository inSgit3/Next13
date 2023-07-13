import Image from 'next/image'
import styles from './page.module.css'
import home from '@/utilities/images/home.png'
import Button from '@/components/Button/Button'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better framework for your web applications</h1>
        <p className={styles.desc}>This project was done in order to learn and test the NextJs framework. In particular, things like NextJs App router, SEO, Authorization, and even back-end have been used. So far it seems really cool.
        </p>
        <Button url='/portfolio' text='Go to portfolio' className={styles.btn}/>
      </div>
<div className={styles.item}>
  <Image src={home} alt="illustration Logo"  className={styles.img} />
</div>
</div>
  )
}
