import NavbarLogo from "../NavbarLogo";
import NavbarLinks from "../NavbarLinks";

const Navbar = () => {
  return (
    <div className="w-screen bg-black fixed top-0 z-50">
      <div className="mx-5 py-5 flex justify-between items-baseline">
        <NavbarLogo />
        <NavbarLinks />
      </div>
    </div>
  );
};
export default Navbar;
