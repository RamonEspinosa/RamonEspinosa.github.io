enum SCHEMA {
  DARK = "dark",
  LIGHT = "light",
}

const DarkModeSwitch = () => {
  localStorage.setItem("theme", SCHEMA.DARK);
  return null;
};
export default DarkModeSwitch;
