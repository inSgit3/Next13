import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import contactImg from '@/utilities/images/contact.png'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "Contact with Abdurashid",
  description: 'this is contact page with Abdurashid, you can ask questions, tell your feedbacks',
}

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contact</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contactImg} alt="contact pic"  className={styles.img} width={500} height={500}/>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder='name' className={styles.textInput}/>
            <input type="email" placeholder='email' className={styles.emailInput}/>
            <textarea name="text" placeholder='message' cols="30" rows="10"className={styles.textareaInput} />
            <Button url="#" text="Send" className={styles.btn}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
