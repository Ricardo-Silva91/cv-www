'use client'

import { SmoothScrollContext } from '@/app/utils/SmoothScroll.context';
import WrittenText, { WrittenTextProps } from '../written-text/WrittenText'
import styles from './hero.module.scss'
import { useContext } from 'react';

export default function Hero() {
  const writtenTextProps: WrittenTextProps = {
    lines: [
      { text: 'Hello, my name is ' },
      { text: 'Ricardo Silva', classes: 'highlight' },
      { text: ',' },
      { text: '\n' },
      { text: 'I\'m a ' },
      { text: 'software engineer', classes: 'highlight' },
      { text: ' focused on ' },
      { text: 'front-end development.', classes: 'highlight' },
    ]
  };

  return (
    <div className={styles.hero} data-scroll-section>
      <WrittenText lines={writtenTextProps.lines} ></WrittenText>
      
      <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
          Locomotive Scroll in React
        </h1>
        <h2
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          Ima go sideways
        </h2>
    </div>
  )
}