import React from 'react';
import { useTheme } from './ThemeProvider';

const UseThemeHeader = () => {
  const { theme } = useTheme();

  return <h1 className={`${theme}-theme`}>I am using the {theme} theme</h1>;
}

export default UseThemeHeader;
