"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";

const Register = () => {

const session = useSession()
console.log(session)

const router = useRouter();

const fetcher = (url) => fetch(url).then(res => res.json())
const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

if (error) return <div>Error</div>
if (!data) return <Loader />
  return (
    <div>
      {data.map(item => (
        <div key={item.id} className={styles.content}>
          <div className={styles.imgAndHeading}>
          <h1  className={styles.headings}>{item.title}</h1>
          </div>
           <p key={item.id} className={styles.paragraphs}>{item.body}</p>
        </div>
      ))}
    </div>
      
  )
}

export default Register
