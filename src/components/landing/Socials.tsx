import GitHub from "/github-brands.svg";
import Twitter from "/twitter-brands.svg";
import styles from "../../styles/landing/Socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.socialMediaContainer}>
      <li>
        <a href="https://github.com/kazukitaninaka" target="_blank">
          <img
            src={GitHub}
            className={styles.socialMediaIcon}
            width={35}
            height={35}
            alt="GitHub icon"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/azoookid" target="_blank">
          <img
            src={Twitter}
            className={styles.socialMediaIcon}
            width={35}
            height={35}
            alt="Twitter icon"
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
