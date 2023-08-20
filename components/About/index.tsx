import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from "components/Popover";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const CustomPopover = ({
  children,
  message,
  heading,
}: {
  children: React.ReactNode;
  message: React.ReactNode;
  heading: React.ReactNode;
}) => {
  return (
    <Popover
      arrowProps={{
        className: styles["about__popover-arrow"],
      }}
      placement="top"
    >
      <PopoverTrigger className={styles["about__popover-trigger"]}>
        {children}
      </PopoverTrigger>
      <PopoverContent className={styles["about__popover-content"]}>
        <PopoverHeading className={styles["about__popover-heading"]}>
          {heading}
        </PopoverHeading>
        <PopoverDescription className={styles["about__popover-description"]}>
          {message}
        </PopoverDescription>
        <PopoverClose className="visually-hidden">Close</PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

const wizards = [
  {
    href: "https://github.com/HugoLiconV",
    name: "Hugo Licon",
  },
  {
    href: "https://github.com/Manuel-Espinosa",
    name: "Manuel Espinosa",
  },
  {
    href: "https://github.com/eduardo-rdguez",
    name: "Eduardo Rodriguez",
  },
];

const About = () => {
  return (
    <section className={styles.about__section}>
      <article className={styles.about__biography}>
        <h2>Get to know me better</h2>
        <p>
          I first interacted with a computer at 8, when my brother taught me how
          to play{" "}
          <CustomPopover
            heading="Wololo"
            message={
              <span>
                Everytime the game was launched, this{" "}
                <Link
                  href="https://www.youtube.com/watch?v=_rS_n3JVTPE"
                  target="_blank"
                >
                  intro video
                </Link>{" "}
                would start playing. Watching it now makes me so nostalgic.
              </span>
            }
          >
            Age of Empires 2
          </CustomPopover>{" "}
          on our first PC, a Compaq Presario S5100NX. Even today, that game
          holds a special place in our hearts.
        </p>
        <p>
          With limited internet access at the time, I turned to Microsoft
          Encarta for my homework needs. Occasionally, I&apos;d become bored,
          prompting me to explore other software like Minesweeper or{" "}
          <CustomPopover
            heading="So many memories!"
            message={
              <span>
                I feel someone should port this game to the web. It was really
                fun to play back when there was no internet. Feel free to watch{" "}
                <Link
                  href="https://www.youtube.com/watch?v=uMZwb05pPnI"
                  target="_blank"
                >
                  video gameplay here
                </Link>
                .
              </span>
            }
          >
            3D Pinball Space Cadet
          </CustomPopover>
          . I was really fascinated by how much fun computers could be.
        </p>
        <p>
          Some time later, in my teenage years, I took courses on technical
          computer assistance. This earned me some gigs and money, which I then
          used to assemble my own PC. The joy of profiting from my hobby
          inspired me to pursue computer systems engineering. With the support
          of my family and friends, I graduated with honors.
        </p>
        <p>
          Since then, I&apos;ve had multiple jobs where I&apos;ve met{" "}
          <CustomPopover
            heading="Software wizards"
            message={
              <span>
                Check out this awesome crew of devs I really respect.
                They&apos;ve got their own unique skills, but one thing they all
                get is that coding is a human process.
                <ul className={styles.about__wizards}>
                  {wizards.map((wizard) => (
                    <li key={wizard.name}>
                      <Link href={wizard.href}>{wizard.name}</Link>
                    </li>
                  ))}
                </ul>
              </span>
            }
          >
            other passionate developers
          </CustomPopover>
          , many of whom have shaped my career and taught me lots of the things
          I know today.
        </p>
        <p>
          <span className={styles.about__tldr}>TL;DR:</span> Began with Age of
          Empires 2, now a computer systems engineer. My journey involved tech
          courses, jobs, and collaborations, yielding 5+ years of experience.
        </p>
      </article>
    </section>
  );
};

export default About;
