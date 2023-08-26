import { Github, Mail, Phone, Resume } from "components/Icons";
import Link from "next/link";
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styles from "./styles.module.scss";
import Button from "components/Button";

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
            <Link href={to} target={target} passHref>
              <Button as={m.span} rounded size="lg" scale={1.2}>
                <Icon aria-label={label} />
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </LazyMotion>
  );
};

export default Contact;
