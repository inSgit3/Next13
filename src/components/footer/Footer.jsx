'use client'
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import facebook from '@/utilities/images/f.png'
import insta from '@/utilities/images/i.png'
import twitter from '@/utilities/images/t.png'
import youtube from '@/utilities/images/y.png'

const Footer = () => {
  return (
    <div className={styles.container}>
     <div >
     Next.js 13 Tutorial
     </div>
     <div className={styles.social}>
     <Image src={facebook} alt="Facebook Logo" width={48} height={48} className={styles.icon}/>
     <Image src={insta} alt="Facebook Logo" width={48} height={48} className={styles.icon}/>
     <Image src={twitter} alt="Facebook Logo" width={48} height={48} className={styles.icon}/>
     <Image src={youtube} alt="Facebook Logo" width={48} height={48} className={styles.icon}/>
     </div>
    </div>
  )
}

export default Footer
