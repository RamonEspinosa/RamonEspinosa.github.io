import styles from "./styles.module.scss";

const Contributions = () => {
  return (
    <>
      <h2>Open Source Contributions</h2>
      <ul className={styles.curriculum__list}>
        <li>
          <span className={styles.oss__project}>Visx: </span>
          <span className={styles.oss__description}>
            Improved Zoom package by allowing devs to provide custom gesture
            handlers.
          </span>
        </li>
        <li>
          <span className={styles.oss__project}>React Hook Form: </span>
          <span className={styles.oss__description}>
            Corrected the documentation for the useWatch hook.
          </span>
        </li>
        <li>
          <span className={styles.oss__project}>Ant Design: </span>
          <span className={styles.oss__description}>
            Updated and refactored the code for drag-and-drop demos.
          </span>
        </li>
        <li>
          <span className={styles.oss__project}>
            Google maps vitest mocks:{" "}
          </span>
          <span className={styles.oss__description}>
            Developed a package for running unit and integration tests with
            Vitest on web applications that make use of Google Maps. Unlike
            similar packages, this one allows the extension of mocks to
            accommodate any test suite requirements.
          </span>
        </li>
        <li>
          <span className={styles.oss__project}>Dagu: </span>
          <span className={styles.oss__description}>
            Solved accessibility problems to improve user experience of people
            with low visibility issues or who use screen readers.
          </span>
        </li>
      </ul>
    </>
  );
};

export default Contributions;
