import Projects from "./Projects";
import styles from "./styles.module.scss";

const Experience = () => {
  return (
    <>
      <h2 className={styles.curriculum__title}>Professional Experience</h2>
      <ul className={styles.curriculum__list}>
        <li>
          <p className={styles.experience__title}>
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
            Building and maintaining web apps made with Node.js and
            containerizing them with Docker. Helping with CI/CD pipelines for
            automated testing and deployments. Mentoring junior developers to
            enhance team skills. Some relevant projects include:
            <Projects />
          </div>
        </li>
        <li>
          <p className={styles.experience__title}>
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
            Focused on optimizing application performance through efficient
            state management and modular component structures, contributing to
            the overall quality and success of the projects.
          </p>
        </li>
        <li>
          <p className={styles.experience__title}>
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
            Programming web and mobile applications with{" "}
            <span className={styles.tech}>React</span> and{" "}
            <span className={styles.tech}>React Native</span>. Serving a{" "}
            <span className={styles.tech}>GraphQL</span> API with an integration
            of Express with Apollo Server. Using numerous Cloud computing
            services offered by AWS like{" "}
            <span className={styles.tech}>EC2</span>,{" "}
            <span className={styles.tech}>CloudWatch</span>,{" "}
            <span className={styles.tech}>Lambda</span>, and{" "}
            <span className={styles.tech}>Elastic Beanstalk</span>.
          </p>
        </li>
        <li>
          <p className={styles.experience__title}>
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
            Worked on a team environment implementing bespoke software using{" "}
            <span className={styles.tech}>MongoDB</span>,{" "}
            <span className={styles.tech}>Express</span>,{" "}
            <span className={styles.tech}>React</span> and{" "}
            <span className={styles.tech}>Node</span>.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Experience;
