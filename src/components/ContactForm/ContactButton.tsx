interface Props {
  title: string;
  name: string;
  className?: string;
}
const ContactButton = (props: Props) => {
  return (
    <div className={"my-5 " + props.className}>
      <input
        className=" w-full text-sm text-white bg-yellow-600 dark:text-white dark:bg-green-900 rounded py-2 px-5"
        type="submit"
        name={props.name}
        value={props.title}
      />
    </div>
  );
};
export default ContactButton;
