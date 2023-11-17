'use client'

import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import styles from './environment.module.scss'
import { SmoothScrollContext } from '@/app/utils/SmoothScroll.context'

export default function Environment() {
  const { scroll } = useContext<any>(SmoothScrollContext)
  const [visible, setVisible] = useState(false);
  const [currentOp, setCurrentOp] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [cellSize, setCellSize] = useState(0);
  const backdropRef = useRef(null)

  const numberOfColumns = useMemo(() => Math.floor(windowWidth / cellSize) || 0, [cellSize]);
  const numberOfRows = useMemo(() => Math.floor(windowHeight / cellSize) || 0, [cellSize]);
  const cellArray = useMemo(() =>
    new Array(numberOfRows * numberOfColumns).fill(0).reduce((acc) => {
      if (acc.slice(-3).findIndex((el: any) => el.hasCloud) !== -1) {
        return [...acc, { hasCloud: false }];
      }

      const newEl = {
        hasCloud: Math.random() > 0.65,
        double: Math.random() > 0.65,
        animationDuration: `${Math.floor(Math.random() * 50) + 50}s`,
        animationDirection: Math.random() > 0.75 ? 'reverse' : 'initial',
     };

      return [...acc, newEl];
    }, []),
    [numberOfColumns, numberOfRows]);
  const gridStyle = useMemo(() =>
    ({
      gridTemplateColumns: `repeat( ${numberOfColumns}, minmax(${cellSize}px, 1fr) )`,
      gridTemplateRows: `repeat( ${numberOfRows}, minmax(${cellSize}px, 1fr) )`,
    }),
    [cellSize, numberOfColumns, numberOfRows]);
  
  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (func: any) => {
        const currentY = func.scroll.y;
        const calc = (currentY * 1) / 1200;
        const calcFloor = Math.round((calc + Number.EPSILON) * 100) / 100;

        setCurrentOp(1 - calcFloor);
      });
    }
  }, [scroll])

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    if (backdropRef.current) {
      const computedStyle = getComputedStyle(backdropRef.current);
      const cellSizeInRef = computedStyle.getPropertyValue('--cell-size');

      setCellSize(parseInt(cellSizeInRef, 10));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 0);
  }, []);

  return (
    <div className={`${styles.environment} ${visible ? styles['environment--visible'] : ''}`}
      
      data-scroll data-scroll-sticky data-scroll-target="#main"
    >
      {/* <div className={styles['environment__back-clouds']}></div> */}

      <div className={styles['environment__backdrop']} style={gridStyle} ref={backdropRef}>
        { numberOfColumns ? 
          cellArray.map((el: any, index: number) => 
          el.hasCloud ?
            <img
              key={index}
              src="/img/clouds.png"
              className={el.double ? styles['environment__backdrop__cloud--double'] : styles['environment__backdrop__cloud']}
              style={{ animationDuration: el.animationDuration, animationDirection: el.animationDirection }}
            /> : <div key={index}></div>
          ) : <></>
        }
      </div>


      <div className={styles['environment__main-cloud-wrapper']} style={{opacity: visible ? currentOp : 0, transition: `opacity ${currentOp < 1 ? '0s' : '0.5s'} ease-in-out` }}>
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
    </div>
  );
}