import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.header__contact}>
        <span>
          <span className={styles.bold}>Email:</span>{" "}
          <a href="mailto:espinosa.lopez.juan.ramon@gmail.com">
            espinosa.lopez.juan.ramon@gmail.com
          </a>
        </span>
        <span>
          <span className={styles.bold}>Phone Number:</span>{" "}
          <a href="tel:+17788362229">+1 (778)-836-2229</a>
        </span>
      </div>
      <p className={styles.header__description}>
        Senior software developer with critical thinking, decision-making, and
        problem-solving skills.
      </p>
    </>
  );
};

export default Header;
