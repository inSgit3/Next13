'use client'
import styles from './page.module.css'
import project from '@/utilities/project.png'
import Image from 'next/image'
import githubIcon from '@/utilities/githubIcon.svg'
import viewIcon from '@/utilities/viewIcon.png'
import Link from 'next/link'


const Portfolio = () => {



  return (
    <div className={styles.container}>
        <h1>Here you can see our portfolios</h1>
      <div className={styles.containerImgs}>
        <div className={styles.imgAndTitle}>
        <div
          className={styles.imgDiv}
        >
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img} />
          <div className={styles.icons}>
            <Image
              src={githubIcon}
              alt="github icon"
              className={styles.icon}
            />
            <Link href='/portfolio/blogPortfolio'>
            <Image
              src={viewIcon}
              alt="view icon"
              className={styles.icon}
            />
              
            </Link>
          </div>
        </div>
        <Link href='/portfolio/blogPortfolio' className={styles.links}>Blog portfolio</Link>
        </div>

        <div className={styles.imgAndTitle}>
        <div
          className={styles.imgDiv}
        >
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img} />
          <div className={styles.icons}>
            <Image
              src={githubIcon}
              alt="github icon"
              className={styles.icon}
            />
            <Link href='/portfolio/AirBnb'>
              <Image
                src={viewIcon}
                alt="view icon"
                className={styles.icon}
              />
              </Link>
          </div>
        </div>
        <Link href='/portfolio/AirBnb' className={styles.links}>AirBnb clone portfolio</Link>
        </div>

        <div className={styles.imgAndTitle}>
        <div
          className={styles.imgDiv}
        >
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img} />
          <div className={styles.icons}>
            <Image
              src={githubIcon}
              alt="github icon"
              className={styles.icon}
            />
            <Link href='/portfolio/githubSearch' >
            <Image
              src={viewIcon}
              alt="view icon"
              className={styles.icon}
            />
            </Link>
          </div>
        </div>
        <Link href='/portfolio/githubSearch' className={styles.links}>Github searcher portfolio</Link>
        </div>

        

      </div>
    </div>
  )
}

export default Portfolio