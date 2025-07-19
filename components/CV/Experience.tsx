import styles from "./styles.module.scss";

const Experience = () => {
  return (
    <>
      <h2 className={styles.curriculum__title}>Professional Experience</h2>
      <ul className={styles.curriculum__list}>
        <li>
          <p>
            <span className={styles.experience__role}>
              Full-stack Developer
            </span>{" "}
            at{" "}
            <a href="https://ttt.studio" target="_blank">
              TTT Studios
            </a>{" "}
            <span className={styles.experience__date}>(2022 - Today)</span>
          </p>
          <div className={styles.experience__description}>
            Building and maintaining web apps made with{" "}
            <span className={styles.tech}>Node.js</span> and{" "}
            <span className={styles.tech}>Docker</span>. Writing E2E,
            integration, and unit tests to ensure application functionality and
            seamless component interaction. Helping with CI/CD pipelines for
            automated testing and deployments. Mentoring junior developers to
            enhance team skills.
          </div>
        </li>
        <li>
          <p>
            <span className={styles.experience__role}>Front-end Developer</span>{" "}
            at{" "}
            <a href="https://dacodes.com" target="_blank">
              DaCodes
            </a>{" "}
            <span className={styles.experience__date}>(2021 - 2022)</span>
          </p>
          <p className={styles.experience__description}>
            Teamed up with TTT Studios to bring creative designs to life using{" "}
            <span className={styles.tech}>React</span>,{" "}
            <span className={styles.tech}>SCSS</span>, and{" "}
            <span className={styles.tech}>Redux</span>. Played a key role in
            developing and implementing responsive web applications, ensuring
            seamless integration of UI/UX design with front-end architecture.
          </p>
        </li>
        <li>
          <p>
            <span className={styles.experience__role}>
              Full-stack Developer
            </span>{" "}
            at{" "}
            <a href="https://prixz.com" target="_blank">
              Prixz
            </a>{" "}
            <span className={styles.experience__date}>(2020 - 2021)</span>
          </p>
          <p className={styles.experience__description}>
            Programmed web and mobile applications with{" "}
            <span className={styles.tech}>React</span> and{" "}
            <span className={styles.tech}>React Native</span>. Maintained a{" "}
            <span className={styles.tech}>GraphQL</span> API with an integration
            of Express and Apollo Server. Used numerous Cloud computing services
            offered by AWS like <span className={styles.tech}>EC2</span>,{" "}
            <span className={styles.tech}>CloudWatch</span>,{" "}
            <span className={styles.tech}>Lambda</span>, and{" "}
            <span className={styles.tech}>Elastic Beanstalk</span>.
          </p>
        </li>
        <li>
          <p>
            <span className={styles.experience__role}>
              Full-stack Developer
            </span>{" "}
            at{" "}
            <a href="https://www.cointic.com.mx" target="_blank">
              Cointic
            </a>{" "}
            <span className={styles.experience__date}>(2018 - 2020)</span>
          </p>
          <p className={styles.experience__description}>
            Worked on a team environment implementing bespoke software
          </p>
        </li>
      </ul>
    </>
  );
};

export default Experience;
