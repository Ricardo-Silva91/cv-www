'use client';

import { useCallback, useRef } from 'react';
import styles from './perspective-box.module.scss'

const constrain = 60;

export default function PerspectiveBox({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((event: any) => {
    if (!ref.current || !moverRef.current) {
      return;
    }

    const transfro = transforms(event.clientX, event.clientY);

    moverRef.current.style.transform  = transfro as string;
  }, []);
  const transforms = useCallback((x: number, y: number) => {
    if (!ref.current) {
      return;
    }

    let box = ref.current.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    
    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) ";
  }, []);

  return (
    <div ref={ref} className={styles['perspective-box']} onMouseMove={handleMouseMove}>
      <div ref={moverRef} className={styles['perspective-box__mover']}>
        {children}
      </div>
    </div>
  )
}