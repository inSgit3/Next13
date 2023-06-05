import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <Image src="/src/utilities/load.gif" alt='loading gif' width={606} height={606}/>
  );
};

export default Loader;
