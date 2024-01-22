'use client'

import useIntersectionObserver from '@/app/utils/IntersectionObserver';
import { useState, useEffect } from 'react';
import WrittenText from '../written-text/WrittenText'
import styles from './about.module.scss'
import PerspectiveBox from '../perspective-box/PerspectiveBox';

export default function About() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div id="about" className={styles.about} ref={ref}>
    {
      hasLoaded ?
      <h1 className='text-5xl font-extrabold'>
        <WrittenText lines={[{ text: 'About' }]}></WrittenText>
      </h1>
      :
      ''
    }
    <PerspectiveBox>
    <img
              src="/img/clouds.png"
            />
    </PerspectiveBox>
    </div>
  )
}