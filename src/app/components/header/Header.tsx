'use client'

import styles from './header.module.scss'

export default function Header() {
  const links = [
    { label: 'Hero', url: '#hero' },
    { label: 'About', url: '#about' },
    { label: 'Curriculum', url: '#curriculum' },
    { label: 'Interests', url: '#interests' },
    { label: 'Contact', url: '#contact' },
  ];

  const scrollToSection = (sect: string) => {
    console.log({ sect });
    
  };

  return (
    <header className={styles.header}>
        <div className={styles.header__left}>left</div>
        <div className={styles.header__right}>
          {
            links.map((link) => 
              <div key={link.url} className={styles.link} onClick={() => scrollToSection(link.url)}>{link.label}</div>
            )
          }
        </div>
    </header>
  )
}