import styles from "./styles.module.scss";

const Projects = () => {
  return (
    <>
      <div>
        <h3 className={styles.projects__title}>Wheaton Precious Metals</h3>
        <ul className={styles.projects__list}>
          <li>
            Set up front-end codebase with{" "}
            <span className={styles.tech}>Vite</span>,{" "}
            <span className={styles.tech}>TypeScript</span> and{" "}
            <span className={styles.tech}>React</span>.
          </li>
          <li>
            Developed custom data-visualization components using{" "}
            <span className={styles.tech}>D3</span> and{" "}
            <span className={styles.tech}>Visx</span>, including interactive
            charts and maps.
          </li>
          <li>
            Helped implement CI/CD pipelines in{" "}
            <span className={styles.tech}>Azure DevOps</span> to automatically
            build, test and deploy the dockerized application to multiple
            environments.
          </li>
          <li>
            Contributed to the <span className={styles.tech}>Express</span>
            -based REST API adding new endpoints and fixing bugs.
          </li>
        </ul>
        <h3 className={styles.projects__title}>Paladin</h3>
        <ul className={styles.projects__list}>
          <li>
            Set up front-end codebase with{" "}
            <span className={styles.tech}>Vite</span>,{" "}
            <span className={styles.tech}>Javascript</span> and{" "}
            <span className={styles.tech}>React</span>. Implemented a Geographic
            Information System to dynamically display security risks in major
            cities of North America in real-time.
          </li>
          <li>
            Aided in configuring and integrating several{" "}
            <span className={styles.tech}>Amazon Web Services</span> such as{" "}
            <span className={styles.tech}>CloudFront</span>,{" "}
            <span className={styles.tech}>S3</span>,{" "}
            <span className={styles.tech}>Cognito</span>,{" "}
            <span className={styles.tech}>Lambda</span> and{" "}
            <span className={styles.tech}>Gateway</span>.
          </li>
          <li>
            Conducted extensive testing to identify and fix bugs which
            eventually led to the creation of a new open source{" "}
            <a href="https://www.npmjs.com/package/google-maps-vitest-mocks">
              library
            </a>
            , ensuring a robust and high-quality application.
          </li>
        </ul>
        <h3 className={styles.projects__title}>Purecount</h3>
        <ul className={styles.projects__list}>
          <li>
            Implemented a warehouse management system to optimize inventory
            tracking and logistics with{" "}
            <span className={styles.tech}>React</span> and{" "}
            <span className={styles.tech}>Express</span>.
          </li>
          <li>
            Implemented CSV parsing feature to automate data extraction and
            reduce manual entry errors.
          </li>
          <li>
            Applied RESTful API principles to facilitate seamless data exchange
            between the front-end and back-end systems.
          </li>
        </ul>
        <h3 className={styles.projects__title}>Teekay</h3>
        <ul className={styles.projects__list}>
          <li>
            Refactored existing codebase to improve readability,
            maintainability, and performance, reducing technical debt.
          </li>
          <li>
            Performed extensive unit and integration testing using{" "}
            <span className={styles.tech}>Jest</span> and{" "}
            <span className={styles.tech}>React Testing Library</span>,
            increasing test coverage and ensuring new changes were introduced
            without disrupting existing functionality.
          </li>
          <li>
            Integrated Power BI to provide dynamic data visualization and
            business intelligence capabilities, enabling comprehensive analysis
            of vessel and financial data.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
