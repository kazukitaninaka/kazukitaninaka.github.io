import styles from "../../styles/landing/History.module.scss";

const History = () => {
  return (
    <div>
      <h2 className={styles.heading2}>⌛ History</h2>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.heading3}>Internships</h3>
          <ul className={styles.list}>
            <li>
              Kaminashi, Inc.
              <ul>
                <li>Stacks: React, TypeScript, ReactNative, Golang</li>
                <li>Duration: 7 months</li>
              </ul>
            </li>
          </ul>
          <p className={styles.paragraph}>
            I have also joined short web dev internships at several companies
            like CyberAgent, Cybozu, Rakuten etc...
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading3}>Education</h3>
          <ul>
            <li>Waseda University, School of International Liberal Studies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
