import { useEffect, useRef } from "react";
import "./index.css";
interface Props {
  round?: boolean;
  activeBackgroundColor: string;
  backgroundColor: string;
  isChecked: boolean;
  onClick?: () => void;
}
const Switch = (props: Props) => {
  const switchElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (switchElement.current) {
      switchElement.current.checked = props.isChecked;
    }
  }, [switchElement, props.isChecked]);
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={props.onClick} ref={switchElement} />
        <span
          style={{
            backgroundColor: props.isChecked
              ? props.activeBackgroundColor
              : props.backgroundColor,
          }}
          className={`slider ${props.round ? "round" : ""}`}
        ></span>
      </label>
    </div>
  );
};
Switch.defaultProps = {
  round: false,
  activeBackgroundColor: "#000",
  backgroundColor: "#000",
  isChecked: false,
  onClick: () => {},
};
export default Switch;
