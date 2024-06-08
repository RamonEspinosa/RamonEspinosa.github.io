import styles from "./styles.module.scss";

const Knowledge = () => {
  return (
    <>
      <h2 className={styles.curriculum__title}>Areas of knowledge</h2>
      <ul className={styles.knowledge__list}>
        <li>
          Good technical background managing REST APIs with{" "}
          <span className={styles.tech}>TypeScript/JavaScript</span>,{" "}
          <span className={styles.tech}>Node.js</span>,{" "}
          <span className={styles.tech}>Express</span>.
        </li>
        <li>
          Great understanding of frontend technologies such as{" "}
          <span className={styles.tech}>React</span>,{" "}
          <span className={styles.tech}>Next.js</span>,{" "}
          <span className={styles.tech}>Vite</span>,{" "}
          <span className={styles.tech}>CSS</span>.
        </li>
        <li>
          Expertise in diverse testing frameworks like{" "}
          <span className={styles.tech}>Jest</span>,{" "}
          <span className={styles.tech}>Vitest</span>,{" "}
          <span className={styles.tech}>Cypress</span>.
        </li>
        <li>
          Experience with cloud providers like{" "}
          <span className={styles.tech}>Amazon Web Services</span>.
        </li>
        <li>
          Competent in Linux containers with{" "}
          <span className={styles.tech}>Docker</span>.
        </li>
      </ul>
    </>
  );
};

export default Knowledge;
