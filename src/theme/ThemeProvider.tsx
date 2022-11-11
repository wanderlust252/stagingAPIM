import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import useLocalStorageState from 'use-local-storage-state';
export const ThemeContext = React.createContext((themeName: string): void => {});

const ThemeProviderWrapper: React.FC = (props) => {
  const [curThemeName, setCurThemeName] = useLocalStorageState('appTheme', {
    defaultValue: 'PureLightTheme',
  });
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const setThemeName = (themeName: any): void => {
    setCurThemeName(themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
