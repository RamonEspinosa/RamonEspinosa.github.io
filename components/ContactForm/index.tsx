import Button from "components/Button";
import { Send } from "components/Icons";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const EMAIL = "espinosalopezjuanramon@gmail.com";
const SUBJECT = "Let's team up";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  return (
    <form
      className={styles.form}
      action={`mailto:${EMAIL}?subject=${encodeURIComponent(
        SUBJECT
      )}&body=${encodeURIComponent(message)}`}
      method="post"
      encType="text/plain"
    >
      <label className={styles.form__label}>
        <span>Message</span>
        <textarea
          className={styles.form__textarea}
          placeholder="Your message here..."
          rows={3}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <Button>
        <Send />
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
