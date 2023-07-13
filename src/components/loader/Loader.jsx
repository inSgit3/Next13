import React from 'react';
import Image from 'next/image';
import loader from '@/utilities/images/load.gif';
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <Image src={loader} alt='loading gif' width={300} height={300} className={styles.loadingGif} priority />
  );
};

export default Loader;
