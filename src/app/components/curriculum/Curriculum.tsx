"use client";

import useIntersectionObserver from "@/app/utils/IntersectionObserver";
import { useState, useEffect } from "react";
import WrittenText from "../written-text/WrittenText";
import styles from "./curriculum.module.scss";

export default function Curriculum() {
  const [isInView, ref] = useIntersectionObserver(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div
      id="curriculum"
      className={`${styles.curriculum} section reveal-box ${
        hasLoaded ? "reveal-box--visible" : ""
      } `}
      ref={ref}
    >
      <h1 className="text-5xl font-extrabold">
        {hasLoaded ? (
          <WrittenText lines={[{ text: "Curriculum" }]}></WrittenText>
        ) : (
          <></>
        )}
      </h1>

      <div className={styles.curriculum__info}>
        <div className={styles.curriculum__info__project}>
          <div className={styles.curriculum__info__project__pic}>
            <img
              className="with-float-animation"
              src="img/ctw_logo.svg"
              alt="Critical Techworks"
            />
          </div>
          <div className={styles.curriculum__info__project__info}>
            <a
              href="https://www.criticaltechworks.com/"
              target="_blank"
              className="text-4xl cursor-none hover:scale-125 hover:opacity-5 transition-transform transition-opacity font-extrabold underline"
            >
              Critical Techworks
            </a>
            <div className="mt-5 text-xl">
              As a Senior Frontend Engineer, learned a lot about Design Systems,
              Angular component libraries and CI/CD, all while &apos;developing
              for developers&apos;.
            </div>
          </div>
        </div>
        <div className={styles.curriculum__info__project}>
          <div className={styles.curriculum__info__project__info}>
            <a
              href="https://moxy.studio/"
              target="_blank"
              className="text-4xl cursor-none hover:scale-125 hover:opacity-5 transition-transform transition-opacity font-extrabold underline"
            >
              Moxy
            </a>
            <div className="mt-5 text-xl">
              Frontend Developer working for many clients in many different
              projects, got to play with React, React Native, Vue and Go.
            </div>
          </div>
          <div className={styles.curriculum__info__project__pic}>
            <img
              className="with-float-animation"
              src="img/Moxy_logo.png"
              alt="Moxy"
            />
          </div>
        </div>
        <div className={styles.curriculum__info__project}>
          <div className={styles.curriculum__info__project__pic}>
            <img
              className="with-float-animation"
              src="img/UA_logo.png"
              alt="Universidade de Aveiro"
            />
          </div>
          <div className={styles.curriculum__info__project__info}>
            <a
              href="https://www.ua.pt/"
              target="_blank"
              className="text-4xl cursor-none hover:scale-125 hover:opacity-5 transition-transform transition-opacity font-extrabold underline"
            >
              Universidade de Aveiro
            </a>
            <div className="mt-5 text-xl">
              Mestrado Integrado em Engenharia de Computadores e Telemática
              (Master&apos;s degree in computer science)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
