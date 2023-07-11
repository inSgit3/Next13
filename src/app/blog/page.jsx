import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store',})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
    {data.map((item) => (
      <Link href="/blog/testId" className={styles.container} key={item.id}> 
        <div className={styles.imageContainer}>
          <Image
          src="https://cdn.pixabay.com/photo/2018/05/03/14/10/united-3371433_1280.jpg"
          alt="Post picture" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1> 
          <p className={styles.desc}>{item.body}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog
