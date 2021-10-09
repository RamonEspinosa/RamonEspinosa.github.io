interface Props {
  title: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
}
const ContactInput = (props: Props) => {
  return (
    <div className="my-5">
      <label
        htmlFor={props.name}
        className="focus:text-xs text-sm dark:text-white"
      >
        {props.title}
      </label>
      <input
        type={props.type}
        className="focus:border-green-700 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-5"
        placeholder={props.placeholder || props.title}
        name={props.name}
        required={props.required}
      />
    </div>
  );
};
export default ContactInput;
