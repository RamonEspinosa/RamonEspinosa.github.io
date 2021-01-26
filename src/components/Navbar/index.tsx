import DarkModeSwitch from "../DarkModeSwitch";
import NavbarLogo from "../NavbarLogo";
import NavbarLinks from "../NavbarLinks";

const Navbar = () => {
  return (
    <div className="w-screen bg-gray-600 dark:bg-black fixed top-0 z-50">
      <div className="mx-5 py-5 flex justify-between items-baseline">
        <NavbarLogo />
        <div className="order-last sm:order-1">
          <NavbarLinks />
        </div>
        <div className="md:order-last">
          <DarkModeSwitch />
        </div>
        
      </div>
    </div>
  );
};
export default Navbar;
