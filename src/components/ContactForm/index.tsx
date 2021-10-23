import ContactTextArea from "./ContactTextArea";
import ContactButton from "./ContactButton";

const ContactForm = () => {
  return (
    <div className="w-11/12 md:w-8/12 flex flex-col items-center">
      <p className=" text-3xl text-center md:text-left font-bold text-white w-8/12">
        Contact me
      </p>
      <form
        className="w-8/12"
        action="mailto:ingespinosalopez@gmail.com"
        method="get"
      >
        <input name="subject" type="hidden" value="Contact" />
        <ContactTextArea
          name="body"
          title="Your message"
          placeholder="Leave a message!"
          rows={5}
          required
        />
        <ContactButton
          name="submit"
          title="Send message"
          className="self-end"
        />
      </form>
    </div>
  );
};
export default ContactForm;
