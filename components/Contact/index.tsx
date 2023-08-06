import { Github, Mail, Phone, Resume } from "components/Icons";
import colors from "constants/colors";
import spacing from "constants/spacing";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation } from "framer-motion";

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
      <List>
        {links.map(({ Icon, label, to, props }) => (
          <ListElement key={label}>
            <Link href={to} passHref {...props}>
              <IconLink
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon aria-label={label} />
              </IconLink>
            </Link>
          </ListElement>
        ))}
      </List>
    </LazyMotion>
  );
};

const List = styled.ul`
  display: flex;
  gap: ${spacing.sm};
  padding: 0;
  list-style-type: none;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const ListElement = styled.li`
  text-align: center;
  vertical-align: middle;
`;

const IconLink = styled(m.a)`
  display: block;
  background-color: ${colors.gray[900]};
  padding: ${spacing.sm};
  border-radius: 50%;
  color: ${colors.white};
  :hover {
    color: ${colors.gray[300]};
  }
`;

export default Contact;
