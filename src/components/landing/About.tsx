import styles from "../../styles/landing/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading2}>🧑‍💻About</h2>
      <ul>
        <li>@azoookid / Kazuki Taninaka</li>
        <li>Web frontend engineer based in Tokyo</li>
        <li>
          Languages: TypeScript, JavaScript / Node.js, Golang, Japanese, English
        </li>
        <li>Frameworks: React, Next.js, Gatsby</li>
      </ul>
    </div>
  );
};

export default About;
