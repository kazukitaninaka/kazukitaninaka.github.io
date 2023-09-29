import styles from "../../styles/landing/History.module.scss";

const History = () => {
  return (
    <div>
      <h2 className={styles.heading2}>⌛ History</h2>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.heading3}>Work Experiences</h3>
          <p>Yet to come...</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading3}>Internships</h3>
          <ul className={styles.list}>
            <li>
              <a href="https://www.cyberagent.co.jp/">CyberAgent, Inc.</a>
              <ul>
                <li>Stacks: JavaScript, TypeScript, SolidJS, Jotai</li>
                <li>Duration: 3 months</li>
              </ul>
            </li>
            <li>
              <a href="https://corp.kaminashi.jp/">Kaminashi, Inc.</a>
              <ul>
                <li>Stacks: React, TypeScript, React Native, Golang</li>
                <li>Duration: 7 months</li>
              </ul>
            </li>
          </ul>
          {/* <p className={styles.paragraph}>
            I have also joined short web dev internships at several companies
            like CyberAgent, Cybozu, Rakuten etc...
          </p> */}
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading3}>Education</h3>
          <ul>
            <li>
              Waseda University, School of International Liberal Studies
              (Apr.2019-Mar.2024)
            </li>
            <li>
              University of Copenhagen, Department of Computer Science
              (Sep.2022-Jun.2023)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
