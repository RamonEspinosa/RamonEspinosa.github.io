import styles from "./styles.module.scss";

const Education = () => {
  return (
    <>
      <h2>Education</h2>

      <ul>
        <li>
          <p>
            <span className={styles.education__title}>
              Computer Systems Engineer
            </span>{" "}
            <span className={styles.experience__date}>(2014 - 2019)</span>
          </p>
          <p className={styles.education__school}>
            Tecnologico de Estudios Superiores de Chalco.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Education;
