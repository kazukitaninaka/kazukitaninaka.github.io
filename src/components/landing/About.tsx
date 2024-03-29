import styles from "../../styles/landing/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading2}>🧑‍💻 About</h2>
      <ul className={styles.list}>
        <li>@azoookid / Kazuki Taninaka</li>
        <li>Web developer based in Tokyo</li>
        <li>
          Languages: TypeScript, JavaScript / Node.js, Golang, Japanese,
          English(Conversational-level)
        </li>
        <li>Frameworks: React, Next.js, React Native</li>
        <li>Likes: being in nature, playing Splatoon, smoking shisha</li>
      </ul>
    </div>
  );
};

export default About;
