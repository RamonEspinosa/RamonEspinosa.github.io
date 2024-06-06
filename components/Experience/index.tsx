import Popover from "components/Popover/Default";
import React from "react";
import { m, Variants } from "framer-motion";
import styles from "./styles.module.scss";
import { ARTICLE_ANIMATION } from "config/animation";

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
    role: "Full-stack developer",
    description: (
      <>
        <p>
          Back in 2022, I made the tough decision to leave Mexico and migrate to
          Canada. It&apos;s been quite a journey, but I have{" "}
          <Popover
            heading="However..."
            message="Good tacos, delicious enchiladas, tasty chilaquiles and spicy salsas. They're all just a distant memory now 😔"
          >
            no regrets
          </Popover>
          .
        </p>
        <p>
          I&apos;ve been working full-time at TTT Studios since then. The team
          is great, and the job keeps me challenged. Life is good.
        </p>
      </>
    ),
  },
  {
    from: 2021,
    to: 2022,
    company: "DaCodes",
    role: "Front-end developer",
    description: (
      <>
        <p>
          At this point in my career, I decided to master a specific role in web
          development.
        </p>
        <p>
          DaCodes brought me in as a contractor to team up with TTT Studios. 99%
          of the time, I was working with the folks at TTT, so when the project
          came to an end, they hired me directly to keep collaborating together.
        </p>
      </>
    ),
  },
  {
    from: 2020,
    to: 2021,
    company: "Prixz",
    role: "Full-stack developer",
    description: (
      <>
        <p>
          This job was awesome and very challenging since the company{" "}
          <Popover
            heading="COVID-19"
            message="The pandemic gave this digital pharmacy a big boost thanks to contactless deliveries, telehealth, and the fear of transmission."
          >
            was blowing up
          </Popover>
          .
        </p>
        <p>
          My colleagues were so much better than me, and I started experiencing
          imposter syndrome. On top of that, I had to learn a whole new tech
          stack from scratch, which added even more pressure to the mix.
        </p>
        <p>
          Even so, I enjoyed working there. My boss and teammates were the best,
          always helping me out. I have lots of respect for those guys because
          they taught me tons of valuable stuff.
        </p>
      </>
    ),
  },

  {
    from: 2018,
    to: 2020,
    company: "Cointic",
    role: "Full-stack developer",
    description: (
      <>
        <p>
          During my university days, I landed an internship at a small startup
          near my home. Things were going great, and the boss liked my work so
          much that they offered me a full-time position.
        </p>
        <p>
          Eventually, I decided it was time to move on because I realized
          staying put wasn&apos;t doing wonders for my career,{" "}
          <Popover
            heading="Oh these?"
            message={
              <>
                <p>
                  No pipelines in sight, just the chaos of MySQL, PHP, jQuery,
                  and manual FTP deployments 😫🔌💻.
                </p>
                <p>
                  But this helped me appreciate functional programming, CI/CD
                  workflows and testing more.
                </p>
              </>
            }
          >
            the tech stack
          </Popover>{" "}
          felt seriously outdated, and I needed a change.
        </p>
      </>
    ),
  },
];

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};
const listItem: Variants = {
  hidden: { opacity: 0, x: "-50%" },
  show: (i) => ({
    opacity: 1,
    x: "0%",
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
    type: "tween",
  }),
};

const Experience = () => {
  return (
    <section className={styles.experience__section}>
      <m.article
        {...ARTICLE_ANIMATION}
        initial={{
          opacity: 0,
          y: "0%",
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className={styles.experience__container}
      >
        <h2>Experience</h2>
        <m.ol
          variants={container}
          initial="hidden"
          animate="show"
          reversed
          className={styles.experience__timeline}
        >
          {jobs.map((job, i) => (
            <m.li
              variants={listItem}
              custom={i}
              key={job.company}
              initial="hidden"
              whileInView="show"
              className={styles.experience__entry}
            >
              <div className={styles["experience__entry-dot"]} aria-hidden>
                ⚬
              </div>
              <div className={styles["experience__entry-line"]} aria-hidden />
              <span
                className={styles.experience__date}
              >{`${job.from} - ${job.to}`}</span>
              <p className={styles.experience__role}>
                <span>{job.role}</span>
                {" at "}
                <span className={styles.experience__company}>
                  {job.company}
                </span>
              </p>
              <div className={styles.experience__description}>
                {job.description}
              </div>
            </m.li>
          ))}
        </m.ol>
      </m.article>
    </section>
  );
};

export default Experience;
