import { Github, Mail, Phone, Resume } from "components/Icons";
import Link from "next/link";
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styles from "./styles.module.scss";

interface Link {
  to: string;
  label: string;
  Icon: (props: unknown) => JSX.Element;
  target?: React.HTMLAttributeAnchorTarget;
}

const links: Link[] = [
  {
    to: "https://github.com/RamonEspinosa",
    label: "Github",
    Icon: Github,
  },

  {
    to: "/files/CV.pdf",
    label: "Download resume",
    Icon: Resume,
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
    target: "_self",
  },
];

const Contact = () => {
  return (
    <LazyMotion features={domAnimation}>
      <ul className={styles.contact__list}>
        {links.map(({ Icon, label, to, target = "_blank" }) => (
          <li className={styles.contact__element} key={label}>
            <Link href={to} target={target}>
              <m.span
                className={styles.contact__link}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon aria-label={label} />
              </m.span>
            </Link>
          </li>
        ))}
      </ul>
    </LazyMotion>
  );
};

export default Contact;
