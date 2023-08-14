import React from "react";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <section className={styles.about__section}>
      <article className={styles.about__biography}>
        <h2>Get to know me better</h2>
        <p>
          TL;DR: Began with Age of Empires 2, now a computer systems engineer.
          My journey involved tech courses, jobs, and collaborations, yielding
          5+ years of experience.
        </p>
        <p>
          My journey started when my brother taught me how to play Age of
          Empires 2 on our first PC, a Compaq Presario S5100NX. Even today, that
          game holds a special place in our hearts.
        </p>
        <p>
          With limited internet access at the time, I turned to Microsoft
          Encarta for my homework needs. Occasionally, I&apos;d become bored,
          prompting me to explore other software like Minesweeper or 3D Pinball
          Space Cadet. I was really fascinated by how much fun computers could
          be.
        </p>
        <p>
          In my teenage years, I took courses on technical computer assistance.
          This earned me some gigs and money, which I then used to assemble my
          own PC. The joy of profiting from my hobby inspired me to pursue
          computer systems engineering. With the support of my family and
          friends, I graduated with honors.
        </p>
        <p>
          I got my first full-time job at a local company as a full-stack
          developer. However, the stress drove me to seek new horizons after a
          year. And that&apos;s how I ended up at Prixz, where I met other
          developers like Hugo and Andres who shaped my career and taught me a
          lot of what I know today.
        </p>
        <p>
          After a while, DaCodes got in touch; they were looking for a developer
          who could collaborate with TTT Studios. And in 2021, my performance at
          TTT impressed them enough to result in a full-time job offer.
        </p>
        <p>
          This is how I migrated to Canada, where I first met (physically)
          David, Chris, and Gokul whom I greatly appreciate for all the support
          and mentorship they have given me.
        </p>
      </article>
    </section>
  );
};

export default About;
