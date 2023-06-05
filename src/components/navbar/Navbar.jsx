'use client'
import React from 'react'
import Link from 'next/link'

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
  },
  {
    id: 6,
    title: "Portfolio",
    url: "/portfolio"
  }
]

const Navbar = () => {
  return (
    <div>
      <Link href="/">NextHOME</Link>
      <div>
        {links.map((link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        )))}
        <button onClick={()=>{console.log('logged out')}}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
