import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import aboutImg from '@/utilities/images/about.jpg'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "About Abdurashid",
  description: 'About Abdurashid, his story of life, the path for becoming web developer and biography',
}


const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={aboutImg} alt="about" fill={true} className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2> 
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>We are a high-level data storage bank</h1>
        <p className={styles.desc}>The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. 
        <br/>
        <br/>
        To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.</p>
        </div>
       <div className={styles.item}>
        <h1 className={styles.title}>Our security is guaranteed</h1>
        <p className={styles.desc}>Data Warehouse is one of the data storage media that has a high level of security. 
        <br/>
        <br/>
        Only you can access and enter data into the data warehouse you have created.</p>
        <Button url="/contact" text="Contact us" />
       </div>
      </div>
    </div>
  )
}

export default about
