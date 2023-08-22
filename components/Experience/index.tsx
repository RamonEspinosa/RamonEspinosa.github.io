import React from "react";
import styles from "./styles.module.scss";

interface Job {
  from: number;
  to: number | string;
  company: string;
  role: string;
  description: React.ReactNode;
}

const jobs: Job[] = [
  {
    from: 2022,
    to: "Today",
    company: "TTT Studios",
    role: "Front-end developer",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    deleniti voluptatem quidem molestiae excepturi odit nam totam delectus
    veniam, saepe deserunt molestias itaque nobis consequuntur
    necessitatibus, minus iure unde facere.`,
  },
  {
    from: 2021,
    to: 2022,
    company: "Dacodes",
    role: "Front-end developer",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    deleniti voluptatem quidem molestiae excepturi odit nam totam delectus
    veniam, saepe deserunt molestias itaque nobis consequuntur
    necessitatibus, minus iure unde facere.`,
  },
  {
    from: 2020,
    to: 2021,
    company: "Prixz",
    role: "Full-stack developer",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    deleniti voluptatem quidem molestiae excepturi odit nam totam delectus
    veniam, saepe deserunt molestias itaque nobis consequuntur
    necessitatibus, minus iure unde facere.`,
  },

  {
    from: 2018,
    to: 2020,
    company: "Cointic",
    role: "Full-stack developer",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
    deleniti voluptatem quidem molestiae excepturi odit nam totam delectus
    veniam, saepe deserunt molestias itaque nobis consequuntur
    necessitatibus, minus iure unde facere.`,
  },
];

const Experience = () => {
  return (
    <section className={styles.experience__section}>
      <article className={styles.experience__container}>
        <h2>Experience</h2>
        <div className={styles.experience__timeline}>
          {jobs.map((job) => (
            <div key={job.company} className={styles.experience__entry}>
              <span
                className={styles.experience__date}
              >{`${job.from} - ${job.to}`}</span>
              <p className={styles.experience__role}>
                <span className={styles.experience__role}>{job.role}</span> at{" "}
                <span className={styles.experience__company}>
                  {job.company}
                </span>
              </p>
              <p className={styles.experience__description}>
                {job.description}
              </p>
              <div className={styles["experience__entry-line"]} />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Experience;
