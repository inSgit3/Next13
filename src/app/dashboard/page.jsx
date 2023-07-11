'use client'
import React, {useEffect, useState} from "react"
import styles from './page.module.css'
import Loader from "@/components/loader/Loader"
import useSWR from 'swr'
import Image from "next/image"

const Register = () => {

const fetcher = (url) => fetch(url).then(res => res.json())
const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

const photoFetcher = (url) => fetch(url).then(res => res.json())
const {photo, photoError} = useSWR('https://jsonplaceholder.typicode.com/photos', photoFetcher)

if (error||photoError) return <div>Error</div>
if (!data||!photo) return <Loader />
  return (
    <div>
      {data.map(item => (
        <div key={item.id} className={styles.content}>
          <div className={styles.imgAndHeading}>
            {photo.map(photoItem => (
              <div key={photoItem.id} className={styles.photo}>
                <Image src={photoItem.url} alt={photoItem.title} />
              </div>
            ))}
            
          <h1  className={styles.headings}>{item.title}</h1>
          </div>
           <p key={item.id} className={styles.paragraphs}>{item.body}</p>
        </div>
      ))}
    </div>
      
  )
}

export default Register
