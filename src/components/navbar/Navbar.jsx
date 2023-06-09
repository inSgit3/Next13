'use client'
import Link from 'next/link'
import styles from './navbar.module.css'
import Button from '../Button/Button'
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "About",
    url: "/about"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard"
  }
]

const Navbar = () => {

  const session = useSession()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>NextHOME</Link>
      <DarkModeSwitch/>
      <div className={styles.links}>
        {links.map((link => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        )))}
        {session.status === 'authenticated' && (
        <Button url="#" text="Logout" onClick={signOut}/>
        )}
      </div>
    </div>
  )
}

export default Navbar
