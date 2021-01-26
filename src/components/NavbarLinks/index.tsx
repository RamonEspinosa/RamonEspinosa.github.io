import ROUTES, { DEFAULT_BEHAVIOUR } from "../../utils/navigation";
const jumpToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      element.scrollIntoView({
        block: "end",
        behavior: DEFAULT_BEHAVIOUR,
      });
    } else {
      element.scrollIntoView({
        behavior: DEFAULT_BEHAVIOUR,
      });
    }
  }
};
interface LinkProps {
  onClick: () => void;
  children: any;
}
const Link = (props: LinkProps) => {
  return (
    <span
      onClick={props.onClick}
      className="hover:underline cursor-pointer text-white dark:text-white"
    >
      {props.children}
    </span>
  );
};
const NavbarLinks = () => {
  return (
    <div  className="hidden md:flex">
      <nav>
        <ul className="list-none flex justify-between gap-10">
          {Object.entries(ROUTES).map(([key, value]) => {
            return (
              <Link
                key={key}
                onClick={() => {
                  jumpToElement(value.route);
                }}
              >
                {value.human}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default NavbarLinks;
