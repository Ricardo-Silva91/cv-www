'use client'

import useIntersectionObserver from '@/app/utils/IntersectionObserver';
import { useState, useEffect } from 'react';
import WrittenText from '../written-text/WrittenText'
import styles from './interests.module.scss'

export default function Interests() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);
  
  return (
    <div id='interests' className={styles.interests} ref={ref}>
    {
      hasLoaded ?
      
      <h1 className='text-5xl font-extrabold'>
        <WrittenText lines={[{ text: 'Interests' }]}></WrittenText>
        </h1>
      :
      ''
    }
    </div>
  )
}