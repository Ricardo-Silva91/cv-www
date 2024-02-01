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
      <>
        <div className={styles.about__title}>
          <h1 className='text-5xl font-extrabold'>
            <WrittenText lines={[{ text: 'About' }]}></WrittenText>
          </h1>
        </div>
        <div className={styles.about__info}>
          <PerspectiveBox>
            <img src="img/ricardo-silva.jpg" alt="profile" />
          </PerspectiveBox>
          <div className='text-4xl'>
            <p>
              I'm obsessed with automating tasks, so recently github actions and playwright scripts have been my best friends.
            </p>
            <p>
              I'm obsessed with automating tasks, so recently github actions and playwright scripts have been my best friends.
            </p>
            <p>
              My prefered tools are React, 
            </p>
          </div>
        </div>
      </>
      :
      ''
    }
    </div>
  )
}