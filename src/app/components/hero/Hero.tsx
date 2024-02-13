import WrittenText, { WrittenTextProps } from "../written-text/WrittenText";
import styles from "./hero.module.scss";

export default function Hero() {
  const writtenTextProps: WrittenTextProps = {
    lines: [
      { text: "Hello, my name is " },
      { text: "Ricardo Silva", classes: "highlight" },
      { text: "," },
      { text: "\n" },
      { text: "I'm a " },
      { text: "software engineer", classes: "highlight" },
      { text: "\n" },
      { text: " focused on " },
      { text: "front-end development.", classes: "highlight" },
    ],
  };

  return (
    <div id="hero" className={`${styles.hero} section`}>
      <div className={styles["hero__text-section"]}>
        <h1 className="text-3xl lg:text-6xl font-extrabold">
          <WrittenText lines={writtenTextProps.lines}></WrittenText>
        </h1>
      </div>
    </div>
  );
}
