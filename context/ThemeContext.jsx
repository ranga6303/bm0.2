// context/ThemeContext.jsx

import React, { createContext, useState, useCallback } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [overrideDark, setOverrideDark] = useState(null);

  const dark = overrideDark !== null ? overrideDark : systemScheme === 'dark';

  const toggleTheme = useCallback(() => {
    setOverrideDark(prev => prev === null ? !dark : !prev);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
