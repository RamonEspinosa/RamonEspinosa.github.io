import ContactForm from "../ContactForm";
import SocialMedia from "../SocialMedia";

const Contact = () => {
  return (
    <div
      className="py-10 bg-no-repeat bg-left-bottom bg-auto max-w-screen max-h-screen"
     
    >
      <div className="container mx-auto ">
        <div className="flex h-full justify-evenly  flex-wrap mt-10 items-stretch">
          <ContactForm />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
export default Contact;
