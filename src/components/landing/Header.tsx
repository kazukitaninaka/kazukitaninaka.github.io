import styles from "../../styles/landing/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>
        <span className={styles.emoji}>🌏</span> azoookid.me
      </h1>
    </div>
  );
};

export default Header;
