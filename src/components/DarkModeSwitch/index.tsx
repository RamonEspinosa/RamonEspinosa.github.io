import { useEffect, useState } from "react";
import Switch from "../Switch";
import { BsMoon, BsSun } from "react-icons/bs";

enum SCHEMA {
    DARK = 'dark',
    LIGHT = 'light'
}

const ENABLED_COLOR = '#fab316'
const DISABLED_COLOR = '#d1d5db'

const changeColorSchema = (color: SCHEMA) => {
    if(color === SCHEMA.DARK) {
        document.documentElement.classList.add(SCHEMA.DARK)
    } else {
        document.documentElement.classList.remove(SCHEMA.DARK)
    }
}
const getModePreference = (): SCHEMA => {
    // verifies if user preferes the dark mode
    const prefersDark = localStorage.theme === SCHEMA.DARK || (!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${SCHEMA.DARK})`).matches);
    return prefersDark ? SCHEMA.DARK : SCHEMA.LIGHT
}
const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(getModePreference() === SCHEMA.DARK);
  const handleClick = () => {
    setDarkMode((dark) => {
        localStorage.setItem('theme', !dark ? SCHEMA.DARK : SCHEMA.LIGHT)
        changeColorSchema(localStorage.theme)
        return !dark
    });
  };
  useEffect(() => {
    // on load, set the color schema the user preferes
    changeColorSchema(localStorage.theme || getModePreference())
  }, [])
  return (
    <div className="flex justify-evenly items-center w-40">
      <BsSun className="text-3xl" color={darkMode ? DISABLED_COLOR : ENABLED_COLOR} />
      <Switch
        onClick={handleClick}
        isChecked={darkMode}
        backgroundColor={ENABLED_COLOR}
        activeBackgroundColor={DISABLED_COLOR}
        round={true}
      />
      <BsMoon className="text-3xl" color={!darkMode ? DISABLED_COLOR : ENABLED_COLOR} />
    </div>
  );
};
export default DarkModeSwitch;
