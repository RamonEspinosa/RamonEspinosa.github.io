import React from "react";
import {
  Popover as P,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from ".";
import styles from "./default.module.scss";

const Popover = ({
  children,
  message,
  heading,
}: {
  children: React.ReactNode;
  message: React.ReactNode;
  heading: React.ReactNode;
}) => {
  return (
    <P
      arrowProps={{
        className: styles.popover__arrow,
      }}
      placement="top"
    >
      <PopoverTrigger className={styles.popover__trigger}>
        {children}
      </PopoverTrigger>
      <PopoverContent className={styles.popover__content}>
        <PopoverHeading className={styles.popover__heading}>
          {heading}
        </PopoverHeading>
        <PopoverDescription className={styles.popover__description}>
          {message}
        </PopoverDescription>
        <PopoverClose className="visually-hidden">Close</PopoverClose>
      </PopoverContent>
    </P>
  );
};

export default Popover;
