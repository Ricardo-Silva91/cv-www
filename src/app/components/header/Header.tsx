'use client'

import { SmoothScrollContext } from '@/app/utils/SmoothScroll.context'
import styles from './header.module.scss'
import { useContext } from 'react'

export default function Header() {
  const { scroll } = useContext<any>(SmoothScrollContext)

  const scrollToSection = (event: any, sect: string) => {
    event.preventDefault()
    scroll && scroll.scrollTo(sect)
  }
  
  const links = [
    // { label: 'Hero', url: '#hero' },
    { label: 'About', url: '#about' },
    { label: 'Curriculum', url: '#curriculum' },
    { label: 'Interests', url: '#interests' },
    { label: 'Contact', url: '#contact' },
  ];

  return (
    <header id='header' className={styles.header}>
        <div className={styles.header__left}></div>
        <div className={styles.header__right}>
          {
            links.map((link) => 
              <div key={link.url} className={`${styles.header__link} text-xl`} onClick={(event) => scrollToSection(event, link.url)}>{link.label}</div>
            )
          }
        </div>
    </header>
  )
}