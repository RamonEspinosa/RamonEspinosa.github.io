import { Github, Mail, Phone, Resume } from "components/Icons";
import Link from "next/link";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import styles from "./styles.module.scss";

const links = [
  {
    to: "https://github.com/RamonEspinosa",
    label: "Github",
    Icon: Github,
  },

  {
    to: "#",
    label: "Download resume",
    Icon: Resume,
    props: {
      download: true,
    },
  },
  {
    to: "mailto:espinosalopezjuanramon@gmail.com",
    label: "Send me an email",
    Icon: Mail,
  },
  {
    to: "tel:+17788362229",
    label: "Call or text me",
    Icon: Phone,
  },
];

const Contact = () => {
  return (
    <ul className={styles.contact__list}>
      {links.map(({ Icon, label, to, props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [{ scale }, api] = useSpring(
          () => ({
            scale: 1,
            config: { tension: 400, friction: 15 },
          }),
          []
        );

        const handleHover = (hovering) =>
          api({
            scale: hovering ? 1.2 : 1,
          });

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const bind = useGesture({
          onHover: ({ hovering }) => handleHover(hovering),
          onFocus: ({}) => handleHover(true),
          onBlur: () => handleHover(false),
        });

        return (
          <li className={styles.contact__element} key={label}>
            <Link href={to} passHref {...props}>
              <animated.a
                className={styles.contact__link}
                target="_blank"
                // whileHover={{ scale: 1.2 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ scale }}
                {...bind()}
              >
                <Icon aria-label={label} />
              </animated.a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
