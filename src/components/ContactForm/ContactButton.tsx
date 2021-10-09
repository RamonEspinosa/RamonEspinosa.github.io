interface Props {
  title: string;
  name: string;
  className?: string;
}
const ContactButton = (props: Props) => {
  return (
    <div className={"my-5 " + props.className}>
      <button
        className="flex justify-center items-center mt-5 text-white h-10 bg-green-700 hover:bg-green-800 rounded w-full transition-all duration-500"
        type="submit"
        name={props.name}
      >
        {props.title}
      </button>
    </div>
  );
};
export default ContactButton;
