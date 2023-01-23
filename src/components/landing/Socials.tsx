import GitHub from "/github-brands.svg";
import Twitter from "/twitter-brands.svg";
import BlogIcon from "/blog-icon.svg";
import styles from "../../styles/landing/Socials.module.scss";

const socials = [
  {
    name: "GitHub",
    icon: GitHub,
    url: "https://github.com/kazukitaninaka",
    alt: "GitHub icon",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/azoookid",
    alt: "Twitter icon",
  },
  {
    name: "Blog",
    icon: BlogIcon,
    url: "https://blog.azoookid.dev",
    alt: "Blog icon",
  },
];

const Socials = () => {
  return (
    <ul className={styles.socialMediaContainer}>
      {socials.map((social) => {
        return (
          <li key={social.name}>
            <a href={social.url} target="_blank">
              <img
                src={social.icon}
                className={styles.socialMediaIcon}
                width={35}
                height={35}
                alt={social.alt}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
