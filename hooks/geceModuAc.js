import localStorageKullan from "./localStorageKullan";
import { useState } from 'react';

function useDarkMode(initialValue = false) {
  const [isDarkMode, setIsDarkMode] = useState(initialValue);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleDarkMode];
}

export default geceModuAc ;