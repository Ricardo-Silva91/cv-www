'use client';

import { useCallback, useRef, useState } from 'react';
import styles from './perspective-box.module.scss'

const constrain = 100;

export default function PerspectiveBox({
  children,
}: {
  children: React.ReactNode
}) {
  const [reset, setReset] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((event: any) => {
    if (!ref.current || !moverRef.current) {
      return;
    }

    const transfro = transforms(event.clientX, event.clientY);

    if(reset) {
      setReset(false);
    }

    moverRef.current.style.transform  = transfro as string;
  }, [reset]);
  const handleMouseLeave = useCallback(() => {
    if (!ref.current || !moverRef.current) {
      return;
    }
    
    setReset(true);
    setTimeout(() => {
      if (!ref.current || !moverRef.current) {
        return;
      }

      moverRef.current.style.transform  = "perspective(100px) rotateX(0deg) rotateY(0deg) ";
    });
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
    <div ref={ref} className={styles['perspective-box']} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={moverRef} className={`${styles['perspective-box__mover']} ${reset ? styles['perspective-box__mover--reset'] : ''}`}>
        {children}
      </div>
    </div>
  )
}