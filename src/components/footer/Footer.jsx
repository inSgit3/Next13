'use client'
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import LinkedIn from '@/utilities/images/l.png'
import insta from '@/utilities/images/i.png'
import twitter from '@/utilities/images/t.png'
import github from '@/utilities/images/g.png'

const Footer = () => {
  return (
    <div className={styles.container}>
     <div >
     Abdurashid&apos;s NextJS full stack project
     </div>
     <div className={styles.social}>
      <a href="https://linkedin.com/in/abdurashid-akbarov">
     <Image src={LinkedIn} alt="LinkedIn Logo" width={35} height={35} className={styles.icon}/>
     </a>
     <a href="https://instagram.com/abdurshd">
     <Image src={insta} alt="Instagram Logo" width={24} height={24} className={styles.icon}/>
     </a>
     <a href="https://twitter.com/abdurshd">
     <Image src={twitter} alt="Twitter Logo" width={24} height={24} className={styles.icon}/>
     </a>
     <a href="https://github.com/inSgit3">
     <Image src={github} alt="Github Logo" width={24} height={24} className={styles.icon}/>
     </a>
     </div>
    </div>
  )
}

export default Footer
