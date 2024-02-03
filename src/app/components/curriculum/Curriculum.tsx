'use client'

import useIntersectionObserver from '@/app/utils/IntersectionObserver';
import { useState, useEffect } from 'react';
import WrittenText from '../written-text/WrittenText'
import styles from './curriculum.module.scss'

export default function Curriculum() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div id="curriculum" className={styles.curriculum} ref={ref}>
    {
      hasLoaded ?
      <>
        <h1 className='text-5xl font-extrabold'>
          <WrittenText lines={[{ text: 'Curriculum' }]}></WrittenText>
          </h1>
          
          <div className={styles.about__info}>
              <p>
                Critical Techworks (https://www.criticaltechworks.com/)
                Senior Frontend Developer
                Learned a lot about Design Systems, compnent libraries and CI/CD, all while 'developing for developers'
              </p>
              <p>
                Moxy (https://moxy.studio/)
                Frontend Developer (React, React Native, Vue, Go)
                Working for many clients in many different project, got to play with React, React Native, Vue and Go.
              </p>
              <p>
                Universidade de Aveiro (https://www.ua.pt/)
                Mestrado Integrado em Engenharia de Computadores e Telemática
              </p>
          </div>
      </>

      :
      ''
    }
    </div>
  )
}