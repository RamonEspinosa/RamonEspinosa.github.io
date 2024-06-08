import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Knowledge from "./Knowledge";
import styles from "./styles.module.scss";

const CV = () => {
  return (
    <div className={styles.curriculum}>
      <Header />
      <Knowledge />
      <Experience />
      <Education />
    </div>
  );
};
export default CV;
