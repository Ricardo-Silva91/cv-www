'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './environment.module.scss'
import { SmoothScrollContext } from '@/app/utils/SmoothScroll.context'

export default function Environment() {
  const { scroll } = useContext<any>(SmoothScrollContext)
  const [currentOp, setCurrentOp] = useState(1);

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (func: any) => {
        const currentY = func.scroll.y;
        const calc = (currentY * 1) / 1200;
        setCurrentOp(1 - calc);
        
      });
    }
  }, [scroll])
  
  return (
    <div className={styles.environment}
      style={{ opacity: currentOp }}
      data-scroll data-scroll-sticky data-scroll-target="#main"
    >
      <div className={styles['environment__back-clouds']}></div>
      <div
        className={`${styles['environment__cloud']} ${styles['environment__cloud--left']}`}
        data-scroll
        data-scroll-speed="10"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      ></div>
      <div
        className={`${styles['environment__cloud']} ${styles['environment__cloud--right']}`}
        data-scroll
        data-scroll-speed="-10"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      ></div>
    </div>
  )
}