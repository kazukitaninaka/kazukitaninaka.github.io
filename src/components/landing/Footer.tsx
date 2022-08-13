import styles from "../../styles/landing/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} azoookid</div>
    </footer>
  );
};

export default Footer;
