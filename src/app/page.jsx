import Image from 'next/image'
import styles from './page.module.css'
import home from '@/utilities/images/home.png'
import Button from '@/components/Button/Button'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repellat, dolore dolorem rem excepturi ex recusandae est quis sint mollitia iste sit minima.
        Quibusdam, sed!
        </p>
        <Button url='/portfolio' text='Go to portfolio' className={styles.btn}/>
      </div>
<div className={styles.item}>
  <Image src={home} alt="illustration Logo"  className={styles.img} />
</div>
</div>
  )
}
