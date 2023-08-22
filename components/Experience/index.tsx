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
    description: `In 2022, I made the tough decision to leave Mexico and migrate to Canada. 
    It's been quite a journey, but I have no regrets. 
    I've been working full-time at TTT Studios since then.
    The team is great, and the job is challenging. Life is good.
    `,
  },
  {
    from: 2021,
    to: 2022,
    company: "DaCodes",
    role: "Front-end developer",
    description: `At this point in my career, I decided to master a specific role in web development.
    DaCodes brought me in as a contractor to team up with TTT Studios.
    99% of the time, I was working with the folks at TTT, so when the project came to an end, they hired me directly to keep collaborating together.
    `,
  },
  {
    from: 2020,
    to: 2021,
    company: "Prixz",
    role: "Full-stack developer",
    description: `This job was awesome and very challenging since the company was blowing up.
    However, my coworkers were so much better than me, and I started experiencing imposter syndrome.
    On top of that, I had to learn a whole new tech stack from scratch, which added even more pressure to the mix.
    Even so, I enjoyed working there. 
    My boss and teammates were the best, always helping me out.
    I have lots of respect for those guys as they taught me tons of valuable stuff.
    `,
  },

  {
    from: 2018,
    to: 2020,
    company: "Cointic",
    role: "Full-stack developer",
    description: `As part of my university studies, I got an internship in a small startup near my home.
    Things were going quite well, and the boss liked my work so much that they offered me a full-time position.
    I stayed there for 2 years.
    Most of the time, I was hanging out in the office, working with a team of 3 developers.
    Eventually, I decided to move on because I realized staying was not good for my career since the tech stack felt very outdated.
    `,
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
