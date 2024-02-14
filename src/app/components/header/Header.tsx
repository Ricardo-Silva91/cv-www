"use client";

import { SmoothScrollContext } from "@/app/utils/SmoothScroll.context";
import styles from "./header.module.scss";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Header() {
  const { scroll } = useContext<any>(SmoothScrollContext);
  const [curentScrollY, setCurrentScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  const scrollToSection = useCallback(
    (event: any, sect: string) => {
      event.preventDefault();
      scroll && scroll.scrollTo(sect);
    },
    [scroll]
  );

  const handleBodyScroll = useCallback(
    (scrollY: number) => {
      const newScrollingDown = curentScrollY < scrollY;

      if (scrollingDown !== newScrollingDown) {
        setScrollingDown(newScrollingDown);
      }
      setCurrentScrollY(scrollY);
    },
    [scrollingDown, curentScrollY]
  );

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (func: any) => {
        const scrollY = func.scroll.y;
        handleBodyScroll(scrollY);
      });
    }
  }, [scroll, handleBodyScroll]);

  const links = [
    // { label: 'Hero', url: '#hero' },
    { label: "About", url: "#about" },
    { label: "Curriculum", url: "#curriculum" },
    { label: "Interests", url: "#interests" },
    { label: "Contact", url: "#contact" },
  ];

  return (
    <header
      id="header"
      className={`${styles.header} ${
        scrollingDown ? styles["header--hidden"] : ""
      } `}
    >
      <div className={styles.header__left}></div>
      <div className={styles.header__right}>
        {links.map((link) => (
          <div
            key={link.url}
            className={`${styles.header__link} text-md xl:text-xl`}
            onClick={(event) => scrollToSection(event, link.url)}
          >
            {link.label}
          </div>
        ))}
      </div>
    </header>
  );
}
