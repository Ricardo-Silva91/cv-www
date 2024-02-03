'use client'

import useIntersectionObserver from '@/app/utils/IntersectionObserver';
import WrittenText from '../written-text/WrittenText'
import styles from './contact.module.scss'
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div id='contact' className={styles.contact} ref={ref}>
      {
        hasLoaded ?
        <>
        <h1 className='text-5xl font-extrabold'>
          <WrittenText lines={[{ text: 'Contact' }]}></WrittenText>
          </h1>
          
        <div className={styles.contact__info}>
            <p>
              email (mailto:ricardos8977@gmail.com)
            </p>
            <p>
              linkedin (https://www.linkedin.com/in/ricardo-silva-365b93104/)
            </p>
            <p>
              github (https://github.com/Ricardo-Silva91)
            </p>
        </div>
        </>
        :
        ''
      }
    </div>
  )
}