import Image from 'next/image'
import styles from './page.module.css'
import project from '@/utilities/project.png'
import Button from '@/components/Button/Button'
import {items} from './data.js'
import { notFound } from 'next/navigation'

const getData = (catg) => {
    const data = items[catg]

    if (data) {
        return data
    }

    return notFound()
}

const Category = ({params}) => {
    const data = getData(params.category)
    return (
    <div className={styles.container}>
       <div>
        <h1 className={styles.bigTitle}>
            Our Works
        </h1>
        {data.map((item) => )}
        <p >
            Illustrations
        </p>
     
        </div>
        <div className={styles.content}>
            <div className={styles.texts}>
                <h1 className={styles.title}>
                    Creative portfolio
                </h1>
                <br/>
                <p className={styles.explanation}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, qui ipsam inventore nobis nesciunt deleniti? A soluta accusamus vel eos?
                </p>
                <br/>
                <br/>
                <Button url='https://github.com/inSgit3/Next13' text="See it" />
            </div>
            <div className={styles.img}>
                <Image src={project} alt='image of portfolio' width={600} height={300} className={styles.img}/>
            </div>
        </div> 
    </div>
  )
}

export default Category