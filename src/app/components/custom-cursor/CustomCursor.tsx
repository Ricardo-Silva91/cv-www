'use client'
import { LegacyRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './custom-cursor.module.scss'

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [mouseIsDown, setMouseIsDown] = useState(false);

  useEffect(() => {
    if (cursorRef.current) {
      document.body.addEventListener('mousemove', mouseMove);
      document.body.addEventListener('mousedown', () => mouseDown(true));
      document.body.addEventListener('mouseup', () => mouseDown(false));


      document.body.style.cursor = 'none';
    }
  }, [cursorRef]);

  const mouseMove = useCallback((e: MouseEvent) => {
    if (!cursorRef.current) {
      return;
    }
    const cursorEl: HTMLElement = cursorRef.current;

    if (cursorEl) {
      cursorEl.style.top = `${e.clientY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  }, []);

  const mouseDown = useCallback((mouseIsDown = true) => {
    if (!cursorRef.current) {
      return;
    }

    setMouseIsDown(mouseIsDown);
  }, []);

  return (
    <div id="custom-cursor" className={`${styles['custom-cursor']} ${mouseIsDown ? styles['custom-cursor--mouse-down'] : ''}`} ref={cursorRef}>
    </div>
  )
}