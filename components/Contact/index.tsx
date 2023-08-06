import { Github, Mail, Phone, Resume } from "components/Icons";
import Link from "next/link";
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
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
    <LazyMotion features={domAnimation}>
      <ul className={styles.contact__list}>
        {links.map(({ Icon, label, to, props }) => (
          <li className={styles.contact__element} key={label}>
            <Link href={to} passHref {...props}>
              <m.a
                className={styles.contact__link}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon aria-label={label} />
              </m.a>
            </Link>
          </li>
        ))}
      </ul>
    </LazyMotion>
  );
};

export default Contact;
