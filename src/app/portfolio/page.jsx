import styles from './page.module.css'
import project from '../../utilities/project.png'
import Image from 'next/image'


const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div>

      </div>
      <div className={styles.containerImgs}>
        <div className={styles.imgDiv}>
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img}/>
        </div>
        <div className={styles.imgDiv}>
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img}/>
        </div>
        <div className={styles.imgDiv}>
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img}/>
        </div>
        <div className={styles.imgDiv}>
          <Image src={project} alt="portfolio project" width={350} height={200} className={styles.img}/>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
