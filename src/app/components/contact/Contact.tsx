"use client";

import useIntersectionObserver from "@/app/utils/IntersectionObserver";
import WrittenText from "../written-text/WrittenText";
import styles from "./contact.module.scss";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isInView, ref] = useIntersectionObserver(0.5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return (
    <div
      id="contact"
      className={`${styles.contact} section reveal-box ${
        hasLoaded ? "reveal-box--visible" : ""
      } `}
      ref={ref}
    >
      <h1 className="text-5xl font-extrabold">
        {hasLoaded ? (
          <WrittenText lines={[{ text: "Contact" }]}></WrittenText>
        ) : (
          <></>
        )}
      </h1>

      <div className={`${styles.contact__info} text-4xl`}>
        <p>
          <a href="mailto:ricardos8977@gmail.com" target="_blank">
            email
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/ricardo-silva-365b93104/"
            target="_blank"
          >
            linkedin
          </a>
        </p>
        <p>
          <a href="https://github.com/Ricardo-Silva91" target="_blank">
            github
          </a>
        </p>
      </div>
    </div>
  );
}
