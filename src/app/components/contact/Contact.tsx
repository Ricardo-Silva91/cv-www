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
          <WrittenText lines={[{ text: 'Contact' }]}></WrittenText>
        :
        ''
      }
    </div>
  )
}