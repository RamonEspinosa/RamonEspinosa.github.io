import Contributions from "./Contributions";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Knowledge from "./Knowledge";
import styles from "./styles.module.scss";

const CV = () => {
  return (
    <div className={styles.curriculum}>
      <h1 className={styles.curriculum__title}>Juan Ramon Espinosa Lopez</h1>
      <Header />
      <Knowledge />
      <Experience />
      <Contributions />
      <Education />
    </div>
  );
};
export default CV;
