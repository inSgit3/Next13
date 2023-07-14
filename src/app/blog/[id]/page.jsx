'use client'
import styles from "./page.module.css";
import Image from "next/image";
import useSWR from 'swr';




const BlogPost = ({ params }) => {

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`/api/posts/${params.id}`, fetcher);

  if (error) {
    return <div>Error loading post</div>;
  }

  if (!data) {
    return <div>Loading post...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.desc}>
            {data?.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data?.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data?.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data?.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data?.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;