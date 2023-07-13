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
          <h1 className={styles.imgTitle}>About project</h1>
          <h2 className={styles.imgDesc}> It is really satisfying project with delightful use of NextJs </h2> 
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>React team now recommends create next app over CRA </h1>
        <p className={styles.desc}>Even NextJs was used in this project, it is not all about NextJs. But still starting from the Spring of 2023, React Dev Team is recommending to use as a primary way to start react project the create next app instead of create react app, which a loud voice.  
        <br/>
        <br/>
        </p>
        </div>
       <div className={styles.item}>
        <h1 className={styles.title}>Your opinion is important</h1>
        <p className={styles.desc}>If you like this project, we appreciate your words and feedbacks related this project. Feel free to leave them</p>
        <Button url="/contact" text="Leave feedback" />
       </div>
      </div>
    </div>
  )
}

export default about
