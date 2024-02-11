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
    <div id="about" className={`${styles.about} reveal-box ${hasLoaded ? 'reveal-box--visible' : ''} `} ref={ref}>
      <div className={styles.about__title}>
        <h1 className='text-5xl font-extrabold'>
          {
            hasLoaded ? 
            <WrittenText lines={[{ text: 'About' }]}></WrittenText>
            : <></>
          }
        </h1>
      </div>
      <div className={styles.about__info}>
        <PerspectiveBox>
          <img src="img/ricardo-silva.jpg" alt="profile" />
        </PerspectiveBox>
        <div className={`${styles.about___info__text} text-4xl flex flex-col justify-center`}>
          <p>
            I&apos;m obsessed with automating tasks, so recently github actions and playwright scripts have been my best friends.
          </p>
          <p className='mt-6'>
            My prefered tool for web development is React but i&apos;m familiar with Vue, Angular and Svelte.
          </p>
        </div>
      </div>
    </div>
  )
}